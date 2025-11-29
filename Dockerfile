# ---------------------------
# STAGE 1 — BUILD
# ---------------------------
FROM node:22.20.0 AS builder

# Definir diretório da aplicação
WORKDIR /app

# Copiar apenas os manifests para instalar dependências
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Instalar dependências conforme o gerenciador (npm como padrão)
RUN npm install

# Copiar o restante do código
COPY . .

# Gerar build da aplicação (React, Next, Vue, Nest, etc.)
RUN npm run build

# ---------------------------
# STAGE 2 — RUNTIME
# ---------------------------
FROM node:22.20.0 AS runner

WORKDIR /app

# Copiar apenas o necessário do estágio builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Porta (caso sua aplicação exponha alguma)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]


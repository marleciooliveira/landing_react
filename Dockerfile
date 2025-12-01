# Usa Node 22.20.0
FROM node:22.16.5

# Instala git para poder clonar o repositório
RUN apt-get update && apt-get install -y git && apt-get clean

# Define diretório da aplicação
WORKDIR /app

# Clona o repositório
RUN git clone https://github.com/marleciooliveira/landing_react.git . 

# Instala dependências
RUN npm install

# Build para produção (caso seja React puro)
# Se sua aplicação for um servidor Node, remova esta linha.
RUN npm run build || echo "Nenhum build necessário para este projeto."

# Expõe porta
EXPOSE 8080

# Comando de inicialização
# Ajuste caso o script seja diferente (ex: "start": "node server.js")
CMD ["npm", "run", "dev"]


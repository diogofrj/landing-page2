# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm ci

# Copia o restante do código-fonte
COPY . .

# Compila a aplicação
RUN npm run build

# Production stage
FROM nginx:stable-alpine AS production

# Copia os arquivos estáticos compilados do estágio de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copia uma configuração personalizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"] 
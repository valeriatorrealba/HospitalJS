# Usar la imagen oficial de Node.js
FROM node:20

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Ejecutar la aplicación en modo de desarrollo
CMD ["npm", "run", "dev"]

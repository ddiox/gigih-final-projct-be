# Menggunakan image node.js versi LTS sebagai base image
FROM node:14

# Menentukan direktori kerja di dalam container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menginstall dependency aplikasi
RUN npm install

# Menyalin kode aplikasi ke dalam container
COPY . .

# Menjalankan aplikasi saat container berjalan
CMD [ "node", "server.js" ]
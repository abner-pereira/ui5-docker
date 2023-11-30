## UI5 com Docker

### Projeto de exemplo para rodar uma aplicação simples, utilizando UI5 com configurações de container em Docker (somente).

---

**Pré-requisitos:**

-   NodeJS
-   Docker Desktop ou Docker Engine

---

### Rodando o projeto locamente

1. Instalação: </br>
   `npm install`

2. Rodando locamente: </br>
   `npm start`

---

### Rodando via Container/Docker

1. Construindo a imagem: </br>
   `sudo docker build -t app-ui5 .`

2. Verificando a imagem criada: </br>
   `sudo docker image ls`

3. Rodando o container e subindo a aplicação: </br>
   `sudo docker run -d -p 127.0.0.1:8080:3000 app-ui5`

4. Verificando o container ativo: </br>
   `sudo docker container ls`

5. Abrindo a aplicação: </br>
   Link: [http://localhost:8080/index.html](http://127.0.0.1:8080/index.html)

---

### Eliminando o Container/Docker

1. Verificando os containers ativos: </br>
   `sudo docker container ls`

2. Eliminando o container: </br>
   `sudo docker rm -f <Container ID>`

---

### Eliminando a Imagem/Docker

1. Verificando as imagens disponíveis: </br>
   `sudo docker image ls`

2. Eliminando a imagem: </br>
   `sudo docker rmi -f <Image ID>`

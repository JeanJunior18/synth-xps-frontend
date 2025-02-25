# Projeto Loja de Timbres

Este projeto consiste em um frontend React, um backend com API e MongoDB. Utilizamos o Docker para facilitar o desenvolvimento local.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de que você tem o Docker e o Docker Compose instalados. Você pode verificar a instalação com os seguintes comandos:

```bash
docker --version

```

Caso não tenha, baixe o Docker.

### Instale as dependências do frontend com o comando:

```bash
npm install

```

Isso instalará todas as dependências necessárias para o frontend.

## Passo 2: Subir a API e o MongoDB com Docker Compose

Agora, vamos subir o backend e o MongoDB utilizando o Docker Compose.

1. Na pasta onde o arquivo `docker-compose-api.yml` está localizado, execute o comando:

```bash
docker compose -f docker-compose-api.yml up -d

```

Esse comando fará o seguinte:

- Subirá a imagem do backend e o MongoDB (caso o MongoDB não tenha sido criado anteriormente).
- A API ficará disponível na porta `3000`, e o MongoDB na porta `27017`.

### Verifique se os containers estão rodando:

```bash
docker ps

```

Você deverá ver algo semelhante a isso:

```bash
CONTAINER ID   IMAGE                      COMMAND                  CREATED          STATUS          PORTS                    NAMES
abcd1234       jeanjr/synth-xps-api:latest "/bin/sh -c 'npm sta..."  10 seconds ago   Up 9 seconds    0.0.0.0:5000->5000/tcp   api
efgh5678       mongo:latest               "docker-entrypoint.s..."  12 seconds ago   Up 11 seconds   0.0.0.0:27017->27017/tcp db

```

## Passo 3: Rodar o Frontend

Agora, com a API e o MongoDB rodando, vamos rodar o frontend:

1. Na pasta do frontend, execute o seguinte comando para iniciar o frontend localmente:

```bash
npm run dev

```

Isso abrirá a aplicação frontend no navegador (geralmente disponível em `http://localhost:5173`).

O frontend estará se comunicando com a API que está rodando no Docker, e você poderá ver as alterações que fizer no código em tempo real.

## Passo 4: Desligar a API

Se você precisar desligar a API (e o MongoDB) por algum motivo, basta rodar o seguinte comando na pasta do backend onde o arquivo `docker-compose-api.yml` está:

```bash
docker compose -f docker-compose-api.yml down

```

Isso irá parar e remover os containers da API e do MongoDB.
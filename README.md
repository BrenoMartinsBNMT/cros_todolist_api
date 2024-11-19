# Cros ToDo List API

Este projeto é uma API para gerenciar uma lista de tarefas (ToDo List). A API permite criar, ler, atualizar e deletar tarefas.

## Tecnologias Utilizadas

- Node.js
- Express
- MySql

## Requisitos

- Node.js instalado
- docker instalado

## Instalação

1. Clone o repositório:
  ```bash
  git clone https://github.com/seu-usuario/cros_todolist_api.git
  ```
2. Navegue até o diretório do projeto:
  ```bash
  cd cros_todolist_api
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
  ```env
  MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=todolist
MYSQL_PASSWORD=todolist
MYSQL_DB=todolist_database

JWT_SECRET=your_secret_key
SALT_ROUNDS=10

  ```

## Executando o Projeto

1. Inicie o servidor:
  ```bash
  npm start
  ```
2. Inicie o servidor MySql:
  ```bash
  docker-compose up -d
  ```
3. A API estará disponível em `http://localhost:3000`.

## Swagger

- `localhost:3000/api` - swagger


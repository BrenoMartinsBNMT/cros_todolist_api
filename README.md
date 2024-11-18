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
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/todolist
  ```

## Executando o Projeto

1. Inicie o servidor:
  ```bash
  npm start
  ```
2. A API estará disponível em `http://localhost:3000`.

## Endpoints

- `GET /tasks` - Retorna todas as tarefas
- `POST /tasks` - Cria uma nova tarefa
- `GET /tasks/:id` - Retorna uma tarefa específica
- `PUT /tasks/:id` - Atualiza uma tarefa específica
- `DELETE /tasks/:id` - Deleta uma tarefa específica

## Contribuição

1. Faça um fork do projeto
2. Crie uma nova branch: `git checkout -b minha-nova-feature`
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`
4. Envie para o repositório remoto: `git push origin minha-nova-feature`
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT.
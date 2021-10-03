# Key-Value Store com gRPC

Este é um trabalho desenvolvido para a disciplina de Laboratório de Desenvolvimento de Aplicações Móveis e Distribuídas (LDAMD) do 5º período curso de Engenharia de Software - Pontifícia Universidade Católica de Minas Gerais (PUC Minas). O intuito deste projeto é a utilização do protocolo gRPC para permitir que o cliente adicione uma chave e valor.

Alunos: Altino Alves Júnior | Lucas Alves Rossi Figueira
 
 Professor: Ricardo Carlini Sperandio

### Primitivas

1. put(key, value)
2. get(key) : value
3. getAllKeys() : Key[]

### O que instalar antes de executar?

Para utilizar o Key-Value Store, antes de rodá-lo é necessário a instalação de algumas dependências, sendo estas:
>bash
> npm install
>

Caso necessário, instale também o grpc:
>bash
> npm install @grpc/proto-loader

>bash
> npm install grpc
>

### Como executar o programa?

Para utilizar o Key-Value Store deve-se executar as seguintes classes na ordem especificada abaixo:
>bash
> cd src
>

>bash
> node server.js
>

>bash
> node client.js
>

Ambos arquivos (server e cliente) encontram-se na pasta src.

### Comandos

Para acessar as funcionalidades do Chat basta digitar um dos comandos abaixo:

| Comando                  | Como acessar                                                                     |
|--------------------------|----------------------------------------------------------------------------------|
| Criar nova chave e valor | put + chave:valor (e.g.: put idade:21) |
| Listar o contéudo de uma chave| get + chave (e.g.: get idade) |
| Listar todas as chaves    | getAllKeys |
| Exibir o menu de ajuda | help |
| Sair do programa | exit |

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5833223&assignment_repo_type=AssignmentRepo)

# API-WEATHER-CHALLENGE

## Arquitetura em camadas

```bash

├── .env                                      <- Arquivo de configuração de ambiente
├── src                                       <- Código fonte do projeto
|   ├── http                                  <- Pasta com as configurações da camada de http
|   |   ├── app.ts                            <- Configurações para o uso do express
|   |   ├── middlewares.ts                    <- Middlewares do express
|   |   ├── routes.ts                         <- Arquivo que contém as rotas do projeto
|   ├── modules                               <- Pasta que contém os modulos do projeto
|   |   ├── <nome_modulo>                     <- Módulo 
|   |   |   ├── index.ts                      <- Factory para criar as instâncias das classes que serão expostas
|   |   |   ├── <nome>.controller.ts          <- Classe controlladora do módulo
|   |   |   ├── <nome>.dto.ts                 <- Interfaces para troca de informações entre objetos
|   |   |   ├── <nome>.service.ts             <- Arquivo que executa a regra de negócio
|   |   |   ├── <nome>.validator.ts           <- Arquivo para validação da requisição
|   |   ├── index.ts                          <- Arquivo para expor os módulos
|   ├── providers                             <- Pasta contendo as bibliotecas utilizadas
|   ├── shared                                <- Pasta com abstrações que podem ser utilizadas em diferentes módulos
|   |   ├── controllers                       <- Contém os arquivos controladores com abstrações
|   |   ├── helpers                           <- Contém os arquivos de ajuda que podem ser utilizados em diferentes módulos
|   |   |   ├── env.helper.ts                 <- Arquivo com o valor default das variáveis utilizadas na aplicação
|   |   |   ├── http-response.helper.ts       <- Arquivo para padronizar as respostas da aplicação
|   |   ├── services                          <- Contém os serviços que podem ser utilizados em diferentes módulos
|   ├── server.ts                             <- Arquivo para inicializar o servidor
├── request-log.log                           <- Arquivo gerado com os logs das requisições

```

## Instalar as dependências

- ```npm i```;

## Iniciar a aplicação no anbiente local

- Utilizar o arquivo **.env** caso queira alterar o valor default de alguma variável de ambiente;
- Executar o comando ```npm run docker:local``` para subir o container com o REDIS;
- Executar o comando ```npm start``` para inicializar o servidor;

## Ambiente de testes


## Documentação da API

[Link](doc/README.md)

# **Fast-Feet**

![GitHub repo size](https://img.shields.io/github/repo-size/RafaelPrado409/Fast-Feet-Backend?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/RafaelPrado409/Fast-Feet-Backend?style=for-the-badge)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-316192?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-1572B6?style=for-the-badge&logo=docker&logoColor=white)

# English

## What is this application?

This application is a challenges made in GoStack bootcamp of Rocketseat.

- It is an application for a fictional distributor, FastFeet. The FastFeet administrator is responsible for registering the deliverers, recipients, packages and problems.
- A delivery that has had a problem can be promptly canceled by the administrator,
- Deliveries can only take place from 8 am to 6 pm;
- A delivery person can only make up to 5 deliveries per day.
- When a delivery is created for a specific delivery person he receives an email and a notification
- All deliveries are listed;
- All couriers are listed;
- All couriers, deliveries and recipients can be excluded by the administrator.

## How do I use it?

#### You should have downloaded the most stable version of [NodeJs](https://nodejs.org/en/)

In this API we use three different databases: ***Postgres***, ***MongoDB***, ***Redis***, so you need to have it installed:

- [Docker](https://docs.docker.com/) to create the containers that will run the databases in the linux image;
- [MongoDBCompass](https://www.mongodb.com/products/compass) to have a view and be able to manipulate your mongodb;
- [Postbird](https://www.electronjs.org/apps/postbird) to have a view and be able to manipulate your postgres db;

You also need to have an account at [mailtrap](https://mailtrap.io/) to view the test emails we use in the API

### Yarn

 ``` 
yarn 
``` 
to install all dependences

 ``` 
 yarn dev 
 ``` 
 to start the application after install the dependences
 
 ```
 yarn queue
 ```
 to run the e-mail queue
 
### NPM

```
npm install
``` 
to install all dependences
```
npm run dev
``` 
 to start the application after install the dependences
 
 ```
 npm run queue
 ```
 to run the e-mail queue


## Relevant dependencies for the project:
- [bee-queue](https://github.com/bee-queue/bee-queue) to create a job queue for sending email;
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) to encrypt passwords;
- [date-fns](https://date-fns.org/) for manipulating dates;
- [Eslint](https://eslint.org/) for standardization and code corrections;
- [express](https://github.com/expressjs/express) for creating routes;
- [express-handlebars](https://github.com/ericf/express-handlebars) to use the handlebars view engine in express;
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) to use tokens;
- [moongose](https://mongoosejs.com/) to model, convert and make queries for mongoDB;
- [multer](https://github.com/expressjs/multer) to be able to upload files;
- [nodemailer](https://nodemailer.com/about/) to send email;
- [nodemailer-express-handlebars](https://github.com/yads/nodemailer-express-handlebars) plugin that generates emails in html format using the handlebars;
- [pg-hstore](https://node-postgre) to store key pairs in a single value;
- [redis](https://redis.io/) as db that will receive the email queue;
- [Sequelize](https://sequelize.org/) as an orm for postgres;
- [sucrase](https://github.com/alangpierce/sucrase) to use the new javascript syntax,
- [yup](https://github.com/jquense/yup) to validate the schemes;


***Some dependences were not mentioned, to make part of the relevants***

### Feedbacks

[![Linkedin: Rafael Prado](https://img.shields.io/badge/-RafaelPrado-blue?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN)](https://www.linkedin.com/in/rafael-prado-8a40b6132/)
[![Gmail Badge](https://img.shields.io/badge/-santiagorafael409@gmail.com-006bed?style=flat-square&logo=Gmail&logoColor=white&link=mailto:SEU-EMAIL)](mailto:santiagorafael409@gmail.com)
[![Rafael Prado]( https://img.shields.io/github/followers/RafaelPrado409?label=follow&style=social)](https://github.com/RafaelPrado409)


# Português

## O que e essa aplicação?

Um desafio feito em node do bootcamp GoStack da Rocketseat.

- É um aplicativo para uma distribuidora fictícia, FastFeet. O administrador do FastFeet é responsável por registrar os entregadores, destinatários, pacotes e problemas.
- Uma entrega que teve algum problema pode ser prontamente cancelada pelo admnistrador,
- A entregas so podem ocorrer das 08h as 18h;
- Um entregador so pode fazer ate 5 entregas por dia.
- Quando e criado uma entrega para um entregador especifico ele recebe um email e uma notificação
- Todas as entregas são listadas;
- Todos os entregadores são listados;
- Todas os entregadores, entregas e destinatarios podem ser excluido pelo admnistrador.

## Como eu a utilizo?

#### Devera ter baixada a versão mais estável do [NodeJs](https://nodejs.org/en/)

Nessa API utilizamos três bancos diferentes: ***Postgres***, ***MongoDB***, ***Redis***, então e preciso que tenha instalado:

- [Docker](https://docs.docker.com/) para criarmos os contêineres que vão rodar os bancos na imagem linux;
- [MongoDB Compass](https://www.mongodb.com/products/compass) para ter uma vizualizacão e poder manipular seu mongodb;
- [Postbird](https://www.electronjs.org/apps/postbird) para ter uma vizualizacão e poder manipular seu db postgres;

E preciso ter uma conta no [mailtrap](https://mailtrap.io/) para vizualizar os emails teste que usamos na API

Após a instalação você pode usar os seguintes comandos no seu terminal dentro da pasta do proejeto ou no VSCode:

### Yarn

 ``` 
yarn 
``` 
para instalar as dependências

 ``` 
 yarn dev
 ``` 
 para iniciar a aplicação apos a instalação das dependências
 
 ```
 yarn queue
 ```
 para iniciar a fila de emails
 
### NPM

```
npm install
``` 
para instalar as dependências
```
npm run dev
``` 
para iniciar a aplicação apos a instalação das dependências

```
npm run queue
```
 para iniciar a fila de emails


## As principais dependências para o projeto:
- [bee-queue](https://github.com/bee-queue/bee-queue) para criar fila de jobs para envio de e-mail;
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) para encriptar as senhas;
- [date-fns](https://date-fns.org/) para manipulacão de datas;
- [Eslint](https://eslint.org/) para padronizações e correções de codigo;
- [express](https://github.com/expressjs/express) para a criacão de rotas;
- [express-handlebars](https://github.com/ericf/express-handlebars) para utilizar a view engine do handlebars no express;
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) para utilizar tokens;
- [moongose](https://mongoosejs.com/) para fazer modelar, converter e fazer consultas para o mongoDB;
- [multer](https://github.com/expressjs/multer) para poder fazer uploads de arquivos;
- [nodemailer](https://nodemailer.com/about/) para fazer o envio de e-mail;
- [nodemailer-express-handlebars](https://github.com/yads/nodemailer-express-handlebars) plugin que gera emails em formato html utilizando o handlebars;
- [pg-hstore](https://node-postgre) para armazenar pares de chave em unico valor;
- [redis](https://redis.io/) como db que vai receber a fila de e-mails;
- [Sequelize](https://sequelize.org/) como orm para o postgres;
- [sucrase](https://github.com/alangpierce/sucrase) para utilizar a sintaxe nova do javascript,
- [yup](https://github.com/jquense/yup) para validacão dos schemas;

***Algumas dependências não foram mencionadas, por fazerem parte das principais***
### Feedbacks

[![Linkedin: Rafael Prado](https://img.shields.io/badge/-RafaelPrado-blue?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN)](https://www.linkedin.com/in/rafael-prado-8a40b6132/)
[![Gmail Badge](https://img.shields.io/badge/-santiagorafael409@gmail.com-006bed?style=flat-square&logo=Gmail&logoColor=white&link=mailto:SEU-EMAIL)](mailto:santiagorafael409@gmail.com)
[![Rafael Prado]( https://img.shields.io/github/followers/RafaelPrado409?label=follow&style=social)](https://github.com/RafaelPrado409)

[⬆ Back to top](#Fast-Feet)<br>

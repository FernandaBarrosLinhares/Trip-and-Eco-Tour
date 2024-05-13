# Trip and Eco Tur

A Trip and Eco Tur é uma plataforma turística que visa promover viagens sustentáveis e experiências positivas para os usuários. 

Ela fornece acesso a informações sobre destinos turísticos como:praias,atrativos naturais e atividades recreativas.

Os usuários podem explorar e descobrir novos destinos, encontrar dicas de viagem sustentáveis e compartilhar suas experiências. As funcionalidades incluem o cadastro de novos usuários, listagem, edição e seleção de destinos, visualização de informações dos destinos, entre outras

## Tecnologia ultilizadas

O sistema foi desenvolvido utilizando Node, Express PostgreSQL como Banco de Dados Relacional

## Como rodar o projeto

#### Clone este repositório em sua máquina local:

git clone 
https://github.com/FernandaBarrosLinhares/Trip-and-Eco-Tour


### Instale as dependencias:
1. `npm install`
2. Se for em ambiente local: `npm install --dev`
3. `cp .env_example .env`

### Para ter valores iniciais no Banco de dados usando seeders:

`sequelize db:seed:all`
`npx sequelize db:seed:all`


## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

## EndPoints

Para acessar a documentação completa das rotas acesse o link: 
|{http://localhost:3005/docs/}|


## Bibliotecas utilizadas:

### Sequelize
`npm install sequelize` 
### PostgreSQL
`npm install pg` 
### CLI do sequelize
`npm install -g sequelize-cli` 
### Dotenv
`npm install dotenv`
### JsonWebToken ( JWT )
`npm install jsonwebtoken`
## instalar o yúp
`npm install yup --save`

### Melhorias a serem aplicadas
1.Separa a tabela de endereço e fazer consumo via cep.
2.Criar novas tabelas por tipos de desctinos: atrativo, hospedagem, alimentação. 
3.Fazer consumo de mapas 
4.Criar ENUM em sexo
5.Criar os papéis obtendo permissionamento para outros tipos de ususarios como administradores e demais usuarios de outros segmentos.


## Desenvolvedora

- Fernanda Linhares (https://www.linkedin.com/in/fernanda-linhares-b10ba32b/)









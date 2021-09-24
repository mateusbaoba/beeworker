INSTRUÇÕES PARA UTILIZAÇÃO DA API

1 INSTALAR AS DEPENDENCIAS: 
    "dotenv": "^10.0.0",
    "dotenv-init": "^1.1.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.0",
   ** "nodemon": "^2.0.12", **
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "sequelize": "^6.6.5",
    "sequelize-cli": "^6.2.0"

2 CONFIGURAR AS INFORMAÇÕES DO BANCO DE DADOS (USUÁRIO E SENHA)    
    * As credenciais do banco estão sendo puxadas do arquivo .env.
    * Este arquivo deve ser criado de acordo com o exemplo, incluindo os valores

3 UTILIZAR OS COMANDOS DO SEQUELIZE-CLI
    (verificar o arquivo .sequelizerc caso haja erro na configuração)
    * criar o banco de dados: yarn sequelize db:create
    * criar as tabelas do migrations: yarn sequelize db:migrate
    * pupular a tabela genders com dados: yarn sequelize db:seed

4 INICIAR O SERVER
    *yarn dev



########## 5 CONSULTAS DA API ##############

A- CREATE (POST): localhost:3001/users
BODY: 
{
	"usr_name":"userwithkey",
	"usr_mail":"ccc@teste3.com",
	"gnr_id":1,
	"usr_phone":"6666-55555",
	"usr_born":"2021-01-01"
}
*SEM AUTENTICAÇÃO
RETORNA O USUÁRIO CRIADO

B- LOGIN (POST): localhost:3001/login
BODY: { "usr_mail":"ccc@teste3.com" }
*SEM AUTENTICAÇÃO
RETORNA: {"message": "loging succeful! :D", "token": <TOKEN GERADO PARA AS DEMAIS CONSULTAS>}


*------> OS MÉTODOS A PARTIR DAQUI REQUEREM AUTENTICAÇÃO DO HEADER COM O TOKEN <-------
HEADER: Authorization = Bearer <TOKEN>

C- UPDATE(PUT): localhost:3001/updateUser/<ID>
DOBY:
{
	"usr_name":"oooopaaaaa",
	"usr_mail":"mateusbaoba@gmail.com",
	"gnr_id":1,
	"usr_phone":"99217-3489",
	"usr_born":"1986-01-01"
}
RETORNA: usuário atualizado

D- DELETE(DELETE): localhost:3001/users/<ID>
RETORNA: 1 SE DELETOU;

E- GETALL (GET): localhost:3001/users

F- GETUSERBYID (GET): localhost:3001/getuserbyid/<ID>

&&&&&&&&&& CONSULTA DA TABELA GENDERS &&&&&&&&&&&
SEM AUTENTICAÇÃO

GETALL (GET): localhost:3001/genders

GETGENDERBYID (GET): localhost:3001/genders/<ID>
require("dotenv").config();
const cors = require('cors');
require("./auth/passport")
const express = require('express');


const database = require('./database/index')

//inicia app
const app = express();
app.use(express.json());

//primeira rota usando o routes
app.use('/', require('./routes')); 
//app.use(cors());//parametros de domínios e configs de segurança
app.listen(3001);


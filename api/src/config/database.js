module.exports ={
    dialect: 'mysql',
    host : 'localhost',
    username : process.env.DB_USER,    
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    define:{
        timestamp: true,
        underscore: true
    }
}

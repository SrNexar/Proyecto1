const express = require('express');
const morgan = require ('morgan');
const path = require ('path');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');

const app = express();

//importando rutas

const compradorRoutes = require('./routes/comprador');




//settings 

app.set('port', process.env.PORT || 3000 );
app.set('view engine' ,'ejs');
app.set('views', path.join(__dirname, 'views'));

//middelwares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'proyecto'
},'single'));
app.use(express.urlencoded({ extended: false }));

//routes 
app.use('/', compradorRoutes);

//archivos estaticos

app.use(express.static(path.join(__dirname,'public')));





app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});


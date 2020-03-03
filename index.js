const express= require('express');
const app = express();
const bodyparser= require('body-parser');
const router_register= require('./router/router_register');
const router_find= require('./router/router_find');
const db = require('./db/db');
const login = require('./router/login');
const router_delete= require('./router/router_delete');
const router_update= require('./router/router_update');

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.use('/login',login);
app.use('/register',router_register);
app.use('/find',router_find);
app.use('/delete',router_delete);
app.use('/update',router_update);
app.get('/',(req,res)=>res.send('hello world'));

app.listen('8000',function(){console.log('app started')});
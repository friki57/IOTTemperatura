const path = require("path");
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

//Conexion BD
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/IOTTemperatura')
.then(db => console.log('db connected'))
.catch(err => console.log(err));

const bd = require("./Modelo/BD")
bd.iniciar();

var app = express();

var puerto = process.env.PORT || "4000";

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"/public")));

app.use(cookieParser());

app.use((req, res, next) => {
  next();
});

const rutas = express.Router();
rutas.get("/",(req,res)=>
{
  bd.cruds.crudTemperatura.leer((datos)=>{
	res.send(datos)
  });
});

rutas.post("/Post",(req,res)=>
{
  console.log("Me llegaron estos datos:", req.body);
  console.log("Me llegaron estos datos:", req.query);
  bd.cruds.crudTemperatura.ingresar(req.query, ()=>{})
  res.send("Gracias, ya me llegaron los datos")
})

app.use(rutas)
//app.listen(puerto, '104.225.141.251', ()=>
app.listen(puerto, ()=>
{
  console.log("Servidor lanzado en el puerto:",puerto);
});

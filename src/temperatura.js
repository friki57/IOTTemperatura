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
//

var app = express();

var puerto = process.env.PORT || "4000";

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"/public")));

app.use(cookieParser());

app.set("views", path.join(__dirname, "Vista/ejs"));
app.set("view engine", "ejs");

app.use((req, res, next) => {
  next();
});

const rutas = express.Router();
rutas.get("/",(req,res)=>
{
  bd.cruds.crudTemperatura.leer((datos)=>{
    res.render('inicio', {
      datos
    });
  });
});

rutas.get("/refrescar",(req,res)=>
{
  //res.send("Bienvenido")
  res.render("refrescar")
});
// var datos = [{"_id":"5fa4f635f2e0dd8b7ce792e7","temperatura":30,"hora":"Fri Nov 06 2020 07:07:33 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa4f746f2e0dd8b7ce792e8","temperatura":25,"hora":"Fri Nov 06 2020 07:12:06 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa4f890f2e0dd8b7ce792e9","temperatura":25,"hora":"Fri Nov 06 2020 07:17:36 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58c9ef2e0dd8b7ce792ea","temperatura":31,"hora":"Fri Nov 06 2020 17:49:18 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58ca8f2e0dd8b7ce792eb","temperatura":30,"hora":"Fri Nov 06 2020 17:49:28 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58cabf2e0dd8b7ce792ec","temperatura":30,"hora":"Fri Nov 06 2020 17:49:31 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58cacf2e0dd8b7ce792ed","temperatura":30,"hora":"Fri Nov 06 2020 17:49:32 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58ce7f2e0dd8b7ce792ee","temperatura":31,"hora":"Fri Nov 06 2020 17:50:31 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58d25f2e0dd8b7ce792ef","temperatura":28,"hora":"Fri Nov 06 2020 17:51:33 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58d2ef2e0dd8b7ce792f0","temperatura":28,"hora":"Fri Nov 06 2020 17:51:42 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58d80f2e0dd8b7ce792f1","temperatura":28,"hora":"Fri Nov 06 2020 17:53:04 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58db2f2e0dd8b7ce792f2","temperatura":28,"hora":"Fri Nov 06 2020 17:53:54 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58e5ff2e0dd8b7ce792f3","temperatura":28,"hora":"Fri Nov 06 2020 17:56:47 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58e73f2e0dd8b7ce792f4","temperatura":28,"hora":"Fri Nov 06 2020 17:57:07 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58e8bf2e0dd8b7ce792f5","temperatura":28,"hora":"Fri Nov 06 2020 17:57:31 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58e9cf2e0dd8b7ce792f6","temperatura":28,"hora":"Fri Nov 06 2020 17:57:48 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58eb0f2e0dd8b7ce792f7","temperatura":28,"hora":"Fri Nov 06 2020 17:58:08 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58ec5f2e0dd8b7ce792f8","temperatura":28,"hora":"Fri Nov 06 2020 17:58:29 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa58ed9f2e0dd8b7ce792f9","temperatura":27,"hora":"Fri Nov 06 2020 17:58:49 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59021f2e0dd8b7ce792fa","temperatura":28,"hora":"Fri Nov 06 2020 18:04:17 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5914bf2e0dd8b7ce792fb","temperatura":28,"hora":"Fri Nov 06 2020 18:09:15 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5927af2e0dd8b7ce792fc","temperatura":27,"hora":"Fri Nov 06 2020 18:14:18 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa593abf2e0dd8b7ce792fd","temperatura":28,"hora":"Fri Nov 06 2020 18:19:23 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa594d0f2e0dd8b7ce792fe","temperatura":27,"hora":"Fri Nov 06 2020 18:24:16 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa595fdf2e0dd8b7ce792ff","temperatura":27,"hora":"Fri Nov 06 2020 18:29:17 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59729f2e0dd8b7ce79300","temperatura":27,"hora":"Fri Nov 06 2020 18:34:17 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59856f2e0dd8b7ce79301","temperatura":26,"hora":"Fri Nov 06 2020 18:39:18 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59982f2e0dd8b7ce79302","temperatura":26,"hora":"Fri Nov 06 2020 18:44:18 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59aaff2e0dd8b7ce79303","temperatura":26,"hora":"Fri Nov 06 2020 18:49:19 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59bdef2e0dd8b7ce79304","temperatura":26,"hora":"Fri Nov 06 2020 18:54:22 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59d08f2e0dd8b7ce79305","temperatura":26,"hora":"Fri Nov 06 2020 18:59:20 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59e34f2e0dd8b7ce79306","temperatura":26,"hora":"Fri Nov 06 2020 19:04:20 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa59f65f2e0dd8b7ce79307","temperatura":26,"hora":"Fri Nov 06 2020 19:09:25 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a091f2e0dd8b7ce79308","temperatura":26,"hora":"Fri Nov 06 2020 19:14:25 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a1bdf2e0dd8b7ce79309","temperatura":26,"hora":"Fri Nov 06 2020 19:19:25 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a2e6f2e0dd8b7ce7930a","temperatura":26,"hora":"Fri Nov 06 2020 19:24:22 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a417f2e0dd8b7ce7930b","temperatura":26,"hora":"Fri Nov 06 2020 19:29:27 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a543f2e0dd8b7ce7930c","temperatura":26,"hora":"Fri Nov 06 2020 19:34:27 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a66ff2e0dd8b7ce7930d","temperatura":26,"hora":"Fri Nov 06 2020 19:39:27 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a799f2e0dd8b7ce7930e","temperatura":26,"hora":"Fri Nov 06 2020 19:44:25 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a8c5f2e0dd8b7ce7930f","temperatura":26,"hora":"Fri Nov 06 2020 19:49:25 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5a9f5f2e0dd8b7ce79310","temperatura":26,"hora":"Fri Nov 06 2020 19:54:29 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5ab21f2e0dd8b7ce79311","temperatura":26,"hora":"Fri Nov 06 2020 19:59:29 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5ac4df2e0dd8b7ce79312","temperatura":26,"hora":"Fri Nov 06 2020 20:04:29 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5ad77f2e0dd8b7ce79313","temperatura":26,"hora":"Fri Nov 06 2020 20:09:27 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5aea3f2e0dd8b7ce79314","temperatura":25,"hora":"Fri Nov 06 2020 20:14:27 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5afd2f2e0dd8b7ce79315","temperatura":25,"hora":"Fri Nov 06 2020 20:19:30 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b0fcf2e0dd8b7ce79316","temperatura":25,"hora":"Fri Nov 06 2020 20:24:28 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b229f2e0dd8b7ce79317","temperatura":25,"hora":"Fri Nov 06 2020 20:29:29 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b358f2e0dd8b7ce79318","temperatura":26,"hora":"Fri Nov 06 2020 20:34:32 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b48bf2e0dd8b7ce79319","temperatura":25,"hora":"Fri Nov 06 2020 20:39:39 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b5b2f2e0dd8b7ce7931a","temperatura":26,"hora":"Fri Nov 06 2020 20:44:34 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b6e4f2e0dd8b7ce7931b","temperatura":26,"hora":"Fri Nov 06 2020 20:49:40 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b808f2e0dd8b7ce7931c","temperatura":26,"hora":"Fri Nov 06 2020 20:54:32 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5b934f2e0dd8b7ce7931d","temperatura":25,"hora":"Fri Nov 06 2020 20:59:32 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5ba60f2e0dd8b7ce7931e","temperatura":25,"hora":"Fri Nov 06 2020 21:04:32 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5bba1f2e0dd8b7ce7931f","temperatura":25,"hora":"Fri Nov 06 2020 21:09:53 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5bde5f2e0dd8b7ce79320","temperatura":25,"hora":"Fri Nov 06 2020 21:19:33 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5bf14f2e0dd8b7ce79321","temperatura":26,"hora":"Fri Nov 06 2020 21:24:36 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c03ef2e0dd8b7ce79322","temperatura":25,"hora":"Fri Nov 06 2020 21:29:34 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c16bf2e0dd8b7ce79323","temperatura":25,"hora":"Fri Nov 06 2020 21:34:35 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c29ef2e0dd8b7ce79324","temperatura":25,"hora":"Fri Nov 06 2020 21:39:42 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c3c3f2e0dd8b7ce79325","temperatura":25,"hora":"Fri Nov 06 2020 21:44:35 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c4f0f2e0dd8b7ce79326","temperatura":25,"hora":"Fri Nov 06 2020 21:49:36 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c61cf2e0dd8b7ce79327","temperatura":25,"hora":"Fri Nov 06 2020 21:54:36 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c74bf2e0dd8b7ce79328","temperatura":25,"hora":"Fri Nov 06 2020 21:59:39 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c875f2e0dd8b7ce79329","temperatura":25,"hora":"Fri Nov 06 2020 22:04:37 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5c9a1f2e0dd8b7ce7932a","temperatura":25,"hora":"Fri Nov 06 2020 22:09:37 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5cad1f2e0dd8b7ce7932b","temperatura":25,"hora":"Fri Nov 06 2020 22:14:41 GMT+0000 (Coordinated Universal Time)","__v":0},{"_id":"5fa5cbfaf2e0dd8b7ce7932c","temperatura":25,"hora":"Fri Nov 06 2020 22:19:38 GMT+0000 (Coordinated Universal Time)","__v":0}]
// datos.map((a)=>
// {
// 	delete a["_id"];
// 	delete a["__v"];
// 	bd.cruds.crudTemperatura.ingresar(a,()=>{});
// })

rutas.post("/Post",(req,res)=>
{
  req.query.hora = (new Date()).toString();
  console.log("Me llegaron estos datos:", req.query);
  bd.cruds.crudTemperatura.ingresar(req.query, ()=>{})
  res.send("Gracias, ya me llegaron los datos")
})

app.use(rutas)
app.listen(80, '104.129.131.178', ()=>
//app.listen(puerto, ()=>
{
  console.log("Servidor lanzado en el puerto:",puerto);
});

module.exports = new cruds();

function cruds() {
  this.crudAula;
  this.iniciar = ()=>
  {
    var fs = require('fs');
    var Cruds = fs.readdirSync('./src/Controlador/CRUDS');
    Cruds.map((crud)=>
    {
      if(crud.toString().substr(0,4)=='crud')
        this[crud.split('.')[0]] = require('./'+crud);
    });
  }
}
// var d = new cruds();
// d.iniciar();

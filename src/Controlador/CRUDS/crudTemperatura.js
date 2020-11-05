module.exports = new crud();

function crud() {
  const Aula = require('./../../Modelo/BD/esquemas/Temperatura.js');
  var tabla = "Temperatura";
  this.ingresar = (datos, callback)=>
  {
    var aula = new Aula(datos);
    aula.save((err, res)=>
    {
      if(!err)
      {
        callback(res);
      }
      else {
        console.log("Error ingresando en la tabla: " + tabla + " - ", err);
      }
    });
  }
  this.eliminar = (id, callback)=>
  {
    Aula.deleteOne({"_id": id}, (err, res)=>
    {
      if(!err)
      {
        callback(res);
        console.log("Eliminados los datos de la tabla "+tabla+":", id);
        return res;
      }
      else {
        console.log("Error al borrar datos de la tabla "+tabla+":", err);
      }
    });
  }
  this.leer = (callback)=>
  {
    Aula.find((err, res)=>
    {
      if(!err)
      {
        callback(res);
        return res;
      }
      else {
        console.log("Error al buscar datos de la tabla "+tabla+":", err);
      }
    });
  }
  this.leerUno = (id,callback)=>
  {
    Aula.findOne({"_id": id}, (err, res)=>
    {
      if(!err)
      {
        callback(res);
        return res;
      }
      else {
        console.log("Error al buscar datos de la tabla "+tabla+":", err);
      }
    });
  }
  this.buscar = (filtro,callback)=>
  {
    Aula.find((err, res)=>
    {
      if(!err)
      {
        const buscar = require('./buscar.js');
        res = buscar(res, filtro);
        callback(res);
        return res;
      }
      else {
        console.log("Error al buscar datos de la tabla "+tabla+":", err);
      }
    });
  }
}

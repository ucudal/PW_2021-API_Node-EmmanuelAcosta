var express = require('express');
var cors = require('cors');

var app = express();



app.use(cors({
  origin: '*'
}));


let experiencia = {
  "experiencia-laboral":[
    {
      "empresa":"Mercado Libre",
      "puesto":"Representante de fraude",
      "descripcion":"Investigación de posibles transacciones fraudulentas.",
      "fechaInicio": new Date("2015-09-01"),
      "fechaFin": new Date("2017-02-10")
    },
    {
      "empresa":"St Consultores",
      "puesto":"Programador Java Jr",
      "descripcion":"Tareas de desarrollo en Java, Apia.",
      "fechaInicio": new Date("2017-03-01"),
      "fechaFin": new Date("2020-08-10")
    },
    {
      "empresa":"Evertec INC",
      "puesto":"Software Engineer Semi Sr",
      "descripcion":"Tareas de desarrollo en Java. Soporte. Mantenimiento.",
      "fechaInicio": new Date("2020-08-12"),
      "fechaFin": new Date("2021-03-05")
    },
    {
      "empresa":"Atos Uy",
      "puesto":"FullStack Developer",
      "descripcion":"Desarrollo en Java, React, Angular.",
      "fechaInicio": new Date("2021-03-05"),
      "fechaFin": null
    }
  ]
}

app.get('/experiencia', function(req, res) {
  res.end(JSON.stringify(experiencia));
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;
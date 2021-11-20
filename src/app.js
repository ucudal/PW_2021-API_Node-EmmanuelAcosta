var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());


app.use(cors({
  origin: '*'
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
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

app.get('/experiencia-laboral', function(req, res) {
  res.end(JSON.stringify(experiencia));
});

app.post('/enviar-formulario', (req, res) => {
  let nombreContacto = req.body.nombreContacto;
  
  if(!nombreContacto){
    res.status(404)
    res.send('Falta el nombre de contacto');
  }else{
    res.status(200)
    res.cookie(`PW_2021-CV_Contacto`, nombreContacto, {
      secure: true,
      httpOnly: true,
    })
    res.send("Formulario enviado correctamente!");
  }
});


app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;
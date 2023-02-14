const data = require('./data.json');
const express = require('express');
const app = express();


app.get('/', (req,res) =>{
    console.log("I suppose nodemon refreshes the changes made only after every refresh?");
    res.status(200).send(data);

    //Display in HTML format
    /*
    res.send(`
    <h1>Programa Top</h1>
    <h4>STATUS: ${data.message}</h4>
    <h4>version: ${data.top.version_top}</h4>
    <h4>Número de estudiantes: ${data.top.students}</h4>
    <h4>Miembros del estudiantado:</h4>
    <ul>
        ${data.top.names.map(item => `<li>${item}</li>`).join('')}    
    </ul>`);*/
});

app.listen(8080);
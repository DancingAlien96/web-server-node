const express = require('express');
const path = require ('path');

const startServer = (options) => {
     const  {port, public_path = 'public'} = options
     console.log(port)
     console.log(public_path)

     const app = express();
     

     //uso de los middleware es como la palabra use 
     app.use(express.static(public_path)); //contenido estatico para que se use

     app.get('*' , (req, res) =>{
        const indexpath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexpath)
     })

    app.listen(port, ()=>{
        console.log(`escuchando en el puerto ${port}`);
    })


     
}


module.exports = {
    startServer
}
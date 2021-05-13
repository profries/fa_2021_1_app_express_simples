const express = require('express')
const app = express();

//Middleware
app.use(function(req,res,next){
    console.log("URL: "+req.originalUrl);
    if(req.originalUrl.includes('hello')){
        next();
    }
    else{
        res.sendStatus(404);
    }
})
//Rotas
app.get('/hello', function(req, res){
    if(req.query && req.query.nome){
        console.log(typeof(req.query.nome));
        res.json({msg:`Hello ${req.query.nome}`});    
    }
    else {
        res.json({msg:"Hello World"});
    }
})
app.get('/hello/:nome', function(req, res){
    console.log(typeof(req.params.nome));
    res.json({msg:`Hello ${req.params.nome}`});
})



//Listen
app.listen(3030, function(){
    console.log("Executando Web Server na porta 3030");
})
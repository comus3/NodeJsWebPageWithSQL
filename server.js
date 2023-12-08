const express = require('express');
const app = express();
app.use(express.static("public"));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


app.use(express.static('public'));

app.post('/', (request,response)=>{

    if (request.body.something != null){
        //do something
    }
})


app.get('/',(request,response)=>{
    if (request.query.something != null){
        //do something
    }
})

app.listen(3000, function(){
    console.log("Server ok");
});





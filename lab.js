let express = require('express');
let app = express();
let db = [];
let bodyParser = require('body-parser');

app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({
    extended : false
}))

app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");

})

app.get("/addNewTask", (req,res)=>{
    res.sendFile(__dirname + "/views/newtask.html");
   
})

app.get('/listAllTask', (req,res)=>{
    res.render("listAllTask.html", {
        task:db
    })
})

app.post('/newTask', (req,res)=>{
    console.log(req.body);
    db.push(req.body);
    console.log(db);
    res.render("listAllTask.html", {
        task:db
    })
   
})


app.listen(8080, ()=>{
    console.log("Listening on 3500");
});

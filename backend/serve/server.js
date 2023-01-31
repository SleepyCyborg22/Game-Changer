const express = require("express");
const app = express();
const path = require('path')

const io = require('socket.io')(3300, {
    cors: {
        origin: ["http://localhost:8090"],
    },
})


app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));


app.get('/', (req,res) => {
    res.render('server');
});

app.listen(3000,() => {
    console.log("Game server chalu");
});
const express = require("express");
const app = express();
const path = require('path')

const io = require("socket.io-client");

const socket = io("http://localhost:3300")
socket.on("connect",() => {
    console.log(`You connected with id: ${socket.id}`);
    // console.log(socket.id);
})

app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/game', (req,res) => {
    res.render('game');
});


app.listen(8080,() => {
    console.log("Game server chalu");
});
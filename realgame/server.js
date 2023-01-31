const path = require('path');
const http = require("http");
const express = require('express');
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/game', (req,res) => {
    res.render('game');
});

numplayers = 0;
playername = [];
sids = [];

io.on("connection", (socket) =>{
    console.log(socket.id);
    // console.log(io.of("/").adapter);
    socket.on('tname', (tname) =>{
        numplayers+=1;
        playername.push(tname);
        console.log(playername);
        sids.push(socket.id);
        io.sockets.emit("refreshusers" ,{numplayers,playername});
    });

    


    

    socket.on("disconnect", ()=> {
        var ts = [];
        var tp = [];
        for(var i = numplayers-1;i>=0;i--){
            if(sids[i]==socket.id){
                sids.pop();
                playername.pop();
                
                break;
            }
            else{
                ts.push(sids[i]);
                sids.pop();
                tp.push(playername[i]);
                playername.pop();
            }
        }
        for(var j=0;j<tp.length;j++){
            sids.push(ts[j]);
            playername.push(tp[j]);
        }
        numplayers-=1;
        if(numplayers<0)numplayers = 0;
        console.log(playername);
        console.log(numplayers);
        io.sockets.emit("refreshusers" ,{numplayers,playername});
    });

});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
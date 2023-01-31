var playerno = 2
var num_players = 4

const pn = document.querySelector("#playnum")
const sc = document.querySelector('#Score')
const ent = document.querySelector("#entbet")

var query = window.location.search.substring(1);
// console.log(query);
var vars = query.split('=');
var names = vars[1];
var dupli = names.split('+');
// console.log(dupli);
var tname = "";
for(var i = 0; i<dupli.length;i++){
    tname+=dupli[i];
    if(i!=(dupli.length-1)){
        tname+=" ";
    }
}
// console.log(tname);


var score = 100
var minbet = score/20
minbet = Math.floor(minbet)

pn.innerHTML+=('<h2>Player Number '+ playerno +'</h2>')

function update_score(){
    sc.innerHTML = ("<h5>Current Score : "+score+"</h5>")
}

function update_players(npl,pnames){
    ent.innerHTML="";
    num_players = npl;
    for(var i=0;i<num_players;i++){
        if(pnames[i]!=tname){
            ent.innerHTML+=('<h4>Bet on Team '+pnames[i]+'</h4>')
            // ent.innerHTML+=('<div class="container">')
            ent.innerHTML+=('<div class="form-check"> <input class="form-check-input" type="radio" name="team'+i+'" id="team'+i+'correct"> <label class="form-check-label" for="team'+i+'correct"> Correct </label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="team'+i+'" id="team'+i+'correct2" checked> <label class="form-check-label" for="team'+i+'correct2"> Not Correct </label> </div>')
            ent.innerHTML+=("<form> <div class='range'> <input class='range__slider' id='slider"+i+"' max='2000' min='"+minbet+"' oninput='amount"+i+".value=slider"+i+".value' type='range' value='300'> <input class='range__amount' id='amount"+i+"' oninput='slider"+i+".value=amount"+i+".value' type='text' value='"+minbet+"'> </div> </form>")
            // ent.innerHTML+=('</div')
            ent.innerHTML+='<br>'
        }
        else{
            playerno = i+1;
            pn.innerHTML=('<h2>Player Number '+ playerno +'</h2>')
        }
    }
    
};

update_score()




// backend code


const socket = io();

socket.emit('tname', tname);

socket.on('refreshusers' , (npl) => {
    update_players(npl.numplayers,npl.playername);
    console.log(npl);
});
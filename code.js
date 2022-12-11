const playerno = 2
const num_players = 4

const pn = document.querySelector("#playnum")
const sc = document.querySelector('#Score')

var score = 100
var minbet = score/20
minbet = Math.floor(minbet)

pn.innerHTML+=('<h2>Player Number '+ playerno +'</h2>')

function update_score(){
    sc.innerHTML = ("<h5>Current Score : "+score+"</h5>")
}

update_score()

const ent = document.querySelector("#entbet")

for(var i=1;i<=num_players;i++){
    if(i!=playerno){
        ent.innerHTML+=('<h4>Bet on Team '+i+'</h4>')
        // ent.innerHTML+=('<div class="container">')
        ent.innerHTML+=('<div class="form-check"> <input class="form-check-input" type="radio" name="team'+i+'" id="team'+i+'correct"> <label class="form-check-label" for="team'+i+'correct"> Correct </label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="team'+i+'" id="team'+i+'correct2" checked> <label class="form-check-label" for="team'+i+'correct2"> Not Correct </label> </div>')
        ent.innerHTML+=("<form> <div class='range'> <input class='range__slider' id='slider"+i+"' max='2000' min='"+minbet+"' oninput='amount"+i+".value=slider"+i+".value' type='range' value='300'> <input class='range__amount' id='amount"+i+"' oninput='slider"+i+".value=amount"+i+".value' type='text' value='"+minbet+"'> </div> </form>")
        // ent.innerHTML+=('</div')
        ent.innerHTML+='<br>'
    }
}
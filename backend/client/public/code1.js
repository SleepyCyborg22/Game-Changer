const num_players = 4

var play_score = []
for(var i=0;i<num_players;i++)play_score.push(100)

const sc = document.querySelector("#score")
const si = document.querySelector("#updatescore")

function update_score(){
    sc.innerHTML = ""
    var j = 0
    for(var i=0;i<num_players;i++){
        j = i+1
        sc.innerHTML+=('<div class="col">Score of Team '+j+' : '+play_score[i]+'</div>')
        
    }
    si.innerHTML = ""
    for(var i=0;i<num_players;i++){
        j = i+1
        si.innerHTML+=('<div class="col"><input class="form-control" type="text" placeholder="Team'+j+' Result" aria-label="Team'+j+' Result"></div>')
    }
    
}

update_score()
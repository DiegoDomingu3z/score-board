let team1 = 0 
let team2 = 0 

function homeOne(){ 
    team1 ++
    console.log(team1);
    drawTeam1Score()
}


function homeThree(){
    team1 += 3
    console.log(team1)
    drawTeam1Score()
}


function awayOne(){
    team2 ++ 
    console.log(team2);
    drawTeam2score()
}
function awayThree(){
    team2 += 3
    console.log(team2);
    drawTeam2score()
}


function drawTeam1Score(){
    let element = document.getElementById('homeScore')
    
    element.innerText = team1
}


function drawTeam2score(){
    let goal = document.getElementById('awayScore')

    goal.innerText = team2
}
drawTeam1Score()
drawTeam2score()




function drawButton(){
    let score2 = document.getElementById('awayScore')
   team2 = 0 
   score2.innerText = team2
   console.log(team2)
   let score1 = document.getElementById('homeScore')
   team1 = 0 

   score1.innerText = team1
   console.log(team1)
}

drawButton()




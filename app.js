
const reset=document.querySelector('#reset');
const winningscoreselect=document.querySelector('select');
const currplayer=document.querySelector('#currplayer');
let count=0;


const p1={
    score:0,
    name:'Player1',
    button:document.querySelector('#p1btn'),
    display:document.querySelector('#player1'),
    turn:true
}
const p2={
    score:0,
    name:'Player2',
    button:document.querySelector('#p2btn'),
    display:document.querySelector('#player2'),
    turn:false
}


let winningscore=3;
let index=winningscore;
let isgameover=false;

function scoreupdate(player,opponent){
    if(!isgameover){
        player.score++;
        if(player.score===winningscore){
            currplayer.innerText = `${player.name} Wins!`;
            isgameover=true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
           
        }
        player.display.textContent=player.score;
    }
}

p1.button.addEventListener('click',()=>{
    scoreupdate(p1,p2);
    winby2(p1,p2);
    currentServer();
})

p2.button.addEventListener('click',()=>{
    scoreupdate(p2,p1);
    winby2(p2,p1);
    currentServer();
})

reset.addEventListener("click",reset1)

winningscoreselect.addEventListener('change',()=>{
    winningscore=parseInt(winningscoreselect.value);
    index=winningscore;

    reset1();
})

function reset1(){

    for(p of[p1,p2]){
        p.score=0;
        p.display.textContent=p.score;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
    }
    isgameover=false;
    winningscore=index;
    winningscoreselect.selectedOptions[0].value=winningscore;
    winningscoreselect.selectedOptions[0].innerText=winningscore;
    count=0;
    currplayer.innerText='Player1 starts the Game';


}

function winby2(player,opponent){
    if(player.score===opponent.score&&player.score===winningscore-1){
        winningscore++;
        winningscoreselect.selectedOptions[0].value=winningscore;
        winningscoreselect.selectedOptions[0].innerText=`Playing till ${winningscore}`;
    }
}

function currentServer(){
    if(isgameover){

    }
    else if(count===1){
        count=0;
        p1.turn=!p1.turn;
        p2.turn=!p2.turn;
        if(p1.turn===true){
            currplayer.innerText=`Player1 Serves`;
        }else{
            currplayer.innerText=`Player2 Serves`;
        }
    }
    else{
        count++;
    }
}
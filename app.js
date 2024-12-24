
const reset=document.querySelector('#reset');
const winningscoreselect=document.querySelector('select');


const p1={
    score:0,
    button:document.querySelector('#p1btn'),
    display:document.querySelector('#player1')
}
const p2={
    score:0,
    button:document.querySelector('#p2btn'),
    display:document.querySelector('#player2')
}


let winningscore=3;
let index=winningscore;
let isgameover=false;

function scoreupdate(player,opponent){
    if(!isgameover){
        player.score++;
        if(player.score===winningscore){
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
})

p2.button.addEventListener('click',()=>{
    scoreupdate(p2,p1);
    winby2(p2,p1);
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


}

function winby2(player,opponent){
    if(player.score===opponent.score&&player.score===winningscore-1){
        winningscore++;
        winningscoreselect.selectedOptions[0].value=winningscore;
        winningscoreselect.selectedOptions[0].innerText=`Playing till ${winningscore}`;
    }
}
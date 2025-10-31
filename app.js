


const reset=document.querySelector('#reset');
const winningscoreselect=document.querySelector('select');
const currplayer=document.querySelector('#currplayer');
let count=0;
const img=document.querySelector('img')
const jsConfetti = new JSConfetti()

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
            currplayer.classList.add('winner');
            currplayer.innerText = `${player.name} Wins!`;
           
            isgameover=true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
const giphyApiKey = process.env.GIPHY_API_KEY; // Store API key in an environment variable
img.src = `https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHA3MmxsM3JiMWE1eWh3ZHh6MnZ5eGxpenFqcnV1dDlrdWJ4bjBxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y3G5KETi99Kn5j9XTN/giphy.webp`;
            jsConfetti.addConfetti();
            // setTimeout(()=>{
            //     alert(`COngratulations ${player.name}`)
            // },2000);

           
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
const UNSPLASH_IMAGE_URL = process.env.UNSPLASH_IMAGE_URL; // Load the image URL from an environment variable

img.src = UNSPLASH_IMAGE_URL;
    currplayer.classList.remove('winner')



}

class WinningscoreselectRefactor {
    constructor(winningscoreselectElement) {
        this.winningscoreselectElement = winningscoreselectElement;
    }

    updateWinningscoreDisplay(newWinningscore) {
        this.winningscoreselectElement.selectedOptions[0].value = newWinningscore;
        this.winningscoreselectElement.selectedOptions[0].innerText = `Playing till ${newWinningscore}`;
    }
}


function winby2(player, opponent, winningscoreselectRefactor, currentWinningscore){
    // Check if both players are one point away from the current winning score and have the same score
    if(player.score === opponent.score && player.score === currentWinningscore - 1){
        // Increment the winning score
        let newWinningscore = currentWinningscore + 1;
        // Update the winningscoreselect element with the new winning score
        winningscoreselectRefactor.updateWinningscoreDisplay(newWinningscore);
        return newWinningscore;
    }
    return currentWinningscore;
}

class Player {
    constructor(turn) {
        this.turn = turn;
    }

    switchTurn(otherPlayer, currplayer) {
        this.turn = !this.turn;
        otherPlayer.turn = !otherPlayer.turn;
        currplayer.innerText = this.turn ? `Player1 Serves` : `Player2 Serves`;
    }
}

function currentServer(p1, p2, currplayer, isgameover, count) {
    if (isgameover) {
        // Game over logic (currently empty)
    } else if (count === 1) {
        count = 0;
        // Delegate turn switching logic to the Player class
        p1.switchTurn(p2, currplayer);
    } else {
        count++;
    }
    return count; // Return the updated count
}
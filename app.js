


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
const giphyApiKey = process.env.GIPHY_API_KEY; // Store the API key in an environment variable

img.src = `https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHA3MmxsM3JiMWE1eWh3ZHh6MnZ5eGxpenFqcnV1dDlrdWJ4bjBxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y3G5KETi99Kn5j9XTN/giphy.webp`; // Construct the URL. The original code contains the API key, but it is not used.
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
const imageBaseUrl = process.env.IMAGE_BASE_URL || "https://images.unsplash.com/photo-1534158914592-062992fbe900";
const imageParams = "q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3";
const imageId = process.env.IMAGE_ID || "M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Fallback, but should ideally also be from env

// Construct the image URL using environment variables
img.src = `${imageBaseUrl}?${imageParams}&ixid=${imageId}`;
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

function winby2(player, opponent, winningscore, winningscoreselectRefactor) {
    // Check if both players are one point away from the current winning score and have the same score
    if (player.score === opponent.score && player.score === winningscore - 1) {
        let newWinningscore = winningscore + 1; // Calculate the new winning score
        winningscoreselectRefactor.updateWinningscoreDisplay(newWinningscore); //Update the winning score display
        return newWinningscore;
    }
    return winningscore; // Return original winningscore if condition is not met.
}

class Player {
    constructor(turn) {
        this.turn = turn;
    }

    switchTurn(otherPlayer, currplayer) {
        this.turn = !this.turn;
        otherPlayer.turn = !otherPlayer.turn;
        if (this.turn === true) {
            currplayer.innerText = `Player1 Serves`; // Assuming 'this' is player 1
        } else {
            currplayer.innerText = `Player2 Serves`; // Assuming 'otherPlayer' is player 2
        }
    }
}

let p1 = new Player(true);
let p2 = new Player(false);
let count = 0;
let isgameover = false; // Initialize isgameover

function currentServer(currplayer){
    //Check if the game is over
    if(isgameover){

    }
    // If count is 1, switch turns between players
    else if(count===1){
        count=0;
        p1.switchTurn(p2, currplayer); // Use the new method to handle turn switching and UI updates
    }
    // Increment count if it's not 1
    else{
        count++;
    }
}
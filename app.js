


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
const giphyApiKey = process.env.GIPHY_API_KEY; // Use environment variable for API key

img.src = `https://media3.giphy.com/media/v1.Y2lk=${giphyApiKey}&ep=v1_internal_gif_by_id&ct=g/Y3G5KETi99Kn5j9XTN/giphy.webp`;
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
const unsplashImageUrl = process.env.UNSPLASH_IMAGE_URL; // Store the URL in an environment variable

img.src = unsplashImageUrl;
    currplayer.classList.remove('winner')



}

class Winningscoreselect {
    constructor(selectElement) {
        this.selectElement = selectElement;
    }

    updateWinningscore(newWinningscore) {
        this.selectElement.value = newWinningscore;
        this.selectElement.innerText = `Playing till ${newWinningscore}`;
    }

    // New method to handle the win-by-2 logic
    handleWinByTwo(playerScore, opponentScore, currentWinningscore) {
        if (playerScore === opponentScore && playerScore === currentWinningscore - 1) {
            let newWinningscore = currentWinningscore + 1;
            this.updateWinningscore(newWinningscore);
            return newWinningscore; // Return the updated winningscore
        }
        return currentWinningscore; // Return the original winningscore if no update
    }
}


function winby2(player,opponent){
    // Access the winningscore globally
    let newWinningscore = winningscoreselect.handleWinByTwo(player.score, opponent.score, winningscore);
    
    // Update the global winningscore if it was changed
    if (newWinningscore !== winningscore) {
        winningscore = newWinningscore;
    }
}

class Player {
    constructor(turn) {
        this.turn = turn;
    }

    changeTurn(otherPlayer, currplayer) {
        this.turn = !this.turn;
        otherPlayer.turn = !otherPlayer.turn;
        currplayer.innerText = this.turn ? `Player1 Serves` : `Player2 Serves`;
    }
}

let p1 = new Player(true);
let p2 = new Player(false);
let isgameover = false;
let count = 1;
let currplayer = { innerText: '' }; // Dummy currplayer object for the provided snippet

function currentServer(){
    if(isgameover){
        // Game over logic (currently empty)
    }
    else if(count===1){
        count=0;
        // Delegate turn management to the Player class
        p1.changeTurn(p2, currplayer);
    }
    else{
        count++;
    }
}
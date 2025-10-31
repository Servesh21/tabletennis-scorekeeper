


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

img.src = `https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHA3MmxsM3JiMWE1eWh3ZHh6MnZ5eGxpenFqcnV1dDlrdWJ4bjBxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y3G5KETi99Kn5j9XTN/giphy.webp`; // The URL is a template literal, but the API key itself should not be visible in the code
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
const UNSPLASH_IMAGE_URL = process.env.UNSPLASH_IMAGE_URL; // Load image URL from environment variable

if (!UNSPLASH_IMAGE_URL) {
    console.error("UNSPLASH_IMAGE_URL environment variable not set.");
}

img.src = UNSPLASH_IMAGE_URL || "https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Use environment variable if available, otherwise default
    currplayer.classList.remove('winner')



}

class WinningscoreSelect {
    constructor(selectElement) {
        this.selectElement = selectElement;
    }

    updateWinningscore(newWinningscore) {
        this.selectElement.value = newWinningscore;
        this.selectElement.innerText = `Playing till ${newWinningscore}`;
    }

    // New method to handle the win by 2 condition
    handleWinByTwo(playerScore, opponentScore, currentWinningscore) {
        if (playerScore === opponentScore && playerScore === currentWinningscore - 1) {
            const newWinningscore = currentWinningscore + 1;
            this.updateWinningscore(newWinningscore);
            return newWinningscore; // Return the updated winningscore
        }
        return currentWinningscore; // Return the original winningscore if no update
    }
}

// Assuming winningscoreselect is initialized elsewhere like:
// const winningscoreselect = new WinningscoreSelect(document.getElementById('winningscoreselect'));

function winby2(player, opponent, winningscore, winningscoreselect) {
    // Delegate the win by 2 logic to the WinningscoreSelect class
    return winningscoreselect.handleWinByTwo(player.score, opponent.score, winningscore);
}

class Player {
    constructor(turn) {
        this.turn = turn;
    }

    switchTurn(otherPlayer, currplayer) {
        this.turn = !this.turn;
        otherPlayer.turn = !otherPlayer.turn;
        if (this.turn === true) {
            currplayer.innerText = `Player1 Serves`; // Updated to be player-specific
        } else {
            currplayer.innerText = `Player2 Serves`; // Updated to be player-specific
        }
    }
}

function currentServer(p1, p2, currplayer, isgameover, count) {
    if (isgameover) {
        return count; // No change, but return count for consistency
    }
    else if (count === 1) {
        count = 0;
        p1.switchTurn(p2, currplayer); // Use the new method
    }
    else {
        count++;
    }
    return count;
}
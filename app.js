


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

img.src = `https://media3.giphy.com/media/v1.Y2lk=${giphyApiKey}&ep=v1_internal_gif_by_id&ct=g/Y3G5KETi99Kn5j9XTN/giphy.webp`; // Use the environment variable in the URL
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
const unsplashImageUrl = process.env.UNSPLASH_IMAGE_URL || "https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Moved URL to environment variable

img.src = unsplashImageUrl; // Use the environment variable for the image source
    currplayer.classList.remove('winner')



}

class Winningscoreselect {
    constructor(element) {
        this.element = element;
    }

    updateWinningscore(newWinningscore) {
        this.element.selectedOptions[0].value = newWinningscore;
        this.element.selectedOptions[0].innerText = `Playing till ${newWinningscore}`;
    }
}

function winby2(player, opponent, winningscore, winningscoreselect){
    // Check if both players are one point away from the current winning score and their scores are equal
    if(player.score === opponent.score && player.score === winningscore - 1){
        // Increment the winning score
        let newWinningscore = winningscore + 1;
        
        // Update the winning score display using the Winningscoreselect class
        winningscoreselect.updateWinningscore(newWinningscore);

        return newWinningscore; // Return the new winningscore so it can be updated in the calling scope
    }
    return winningscore; // Return the original winningscore if no update is needed
}

class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
    }

    switchTurn(otherPlayer) {
        this.turn = !this.turn;
        otherPlayer.turn = !otherPlayer.turn;
    }

    getServingMessage() {
        return `${this.name} Serves`;
    }
}

let p1 = new Player("Player1");
let p2 = new Player("Player2");

let count = 0;
let isgameover = false;
let currplayer = { innerText: "" }; // Mock currplayer object


function currentServer(){
    if(isgameover){
        // Game over logic (currently empty)
    }
    else if(count===1){
        count=0;
        // Move turn switching logic to Player class
        p1.switchTurn(p2);

        //Update the current server display based on the player's turn
        if(p1.turn===true){
            currplayer.innerText= p1.getServingMessage();
        }else{
            currplayer.innerText= p2.getServingMessage();
        }
    }
    else{
        count++;
    }
}
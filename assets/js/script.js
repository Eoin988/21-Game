var count = 0;
/** 
const hearts = ["assets/images/hearts/ace_hearts.png","assets/images/hearts/2_hearts.png","assets/images/hearts/3_hearts.png","assets/images/hearts/4_hearts.png","assets/images/hearts/5_hearts.png","assets/images/hearts/6_hearts.png","assets/images/hearts/7_hearts.png","assets/images/hearts/8_hearts.png","assets/images/hearts/9_hearts.png","assets/images/hearts/10_hearts.png","assets/images/hearts/j_hearts.png","assets/images/hearts/q_hearts.png","assets/images/hearts/k_hearts.png"]
const clubs = ["assets/images/clubs/ace_clubs.png","assets/images/clubs/2_clubs.png","assets/images/clubs/3_clubs.png","assets/images/clubs/4_clubs.png","assets/images/clubs/5_clubs.png","assets/images/clubs/6_clubs.png","assets/images/clubs/7_clubs.png","assets/images/clubs/8_clubs.png","assets/images/clubs/9_clubs.png","assets/images/clubs/10_clubs.png","assets/images/clubs/j_clubs.png","assets/images/clubs/q_clubs.png","assets/images/clubs/k_clubs.png"]
const diamonds = ["assets/images/diamonds/ace_diamonds.png","assets/images/diamonds/2_diamonds.png","assets/images/diamonds/3_diamonds.png","assets/images/diamonds/4_diamonds.png","assets/images/diamonds/5_diamonds.png","assets/images/diamonds/6_diamonds.png","assets/images/diamonds/7_diamonds.png","assets/images/diamonds/8_diamonds.png","assets/images/diamonds/9_diamonds.png","assets/images/diamonds/10_diamonds.png","assets/images/diamonds/j_diamonds.png","assets/images/diamonds/q_diamonds.png","assets/images/diamonds/k_diamonds.png"]
const spades = ["assets/images/spades/ace_spades.png","assets/images/spades/2_spades.png","assets/images/spades/3_spades.png","assets/images/spades/4_spades.png","assets/images/spades/5_spades.png","assets/images/spades/6_spades.png","assets/images/spades/7_spades.png","assets/images/spades/8_spades.png","assets/images/spades/9_spades.png","assets/images/spades/10_spades.png","assets/images/spades/j_spades.png","assets/images/spades/q_spades.png","assets/images/spades/k_spades.png"]
*/
const used  = [];
const decks = Array();
let deckInt = Math.floor(Math.random() * 3)
    let deck = deckInt
    let deck2 = deck++

decks[0] = Array ("assets/images/hearts/ace_hearts.png","assets/images/hearts/2_hearts.png","assets/images/hearts/3_hearts.png","assets/images/hearts/4_hearts.png","assets/images/hearts/5_hearts.png","assets/images/hearts/6_hearts.png","assets/images/hearts/7_hearts.png","assets/images/hearts/8_hearts.png","assets/images/hearts/9_hearts.png","assets/images/hearts/10_hearts.png","assets/images/hearts/j_hearts.png","assets/images/hearts/q_hearts.png","assets/images/hearts/k_hearts.png")
decks[1] = Array ("assets/images/clubs/ace_clubs.png","assets/images/clubs/2_clubs.png","assets/images/clubs/3_clubs.png","assets/images/clubs/4_clubs.png","assets/images/clubs/5_clubs.png","assets/images/clubs/6_clubs.png","assets/images/clubs/7_clubs.png","assets/images/clubs/8_clubs.png","assets/images/clubs/9_clubs.png","assets/images/clubs/10_clubs.png","assets/images/clubs/j_clubs.png","assets/images/clubs/q_clubs.png","assets/images/clubs/k_clubs.png")
decks[2] = Array ("assets/images/diamonds/ace_diamonds.png","assets/images/diamonds/2_diamonds.png","assets/images/diamonds/3_diamonds.png","assets/images/diamonds/4_diamonds.png","assets/images/diamonds/5_diamonds.png","assets/images/diamonds/6_diamonds.png","assets/images/diamonds/7_diamonds.png","assets/images/diamonds/8_diamonds.png","assets/images/diamonds/9_diamonds.png","assets/images/diamonds/10_diamonds.png","assets/images/diamonds/j_diamonds.png","assets/images/diamonds/q_diamonds.png","assets/images/diamonds/k_diamonds.png")
decks[3] = Array ("assets/images/spades/ace_spades.png","assets/images/spades/2_spades.png","assets/images/spades/3_spades.png","assets/images/spades/4_spades.png","assets/images/spades/5_spades.png","assets/images/spades/6_spades.png","assets/images/spades/7_spades.png","assets/images/spades/8_spades.png","assets/images/spades/9_spades.png","assets/images/spades/10_spades.png","assets/images/spades/j_spades.png","assets/images/spades/q_spades.png","assets/images/spades/k_spades.png")



document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText)+(parseInt(document.getElementById("dealer-value-2").innerText))+(parseInt(document.getElementById("dealer-value-3").innerText))+(parseInt(document.getElementById("dealer-value-4").innerText)));
            document.getElementById('dealerTotal').textContent  = dealerTotal;

            let playerTotal = (parseInt(document.getElementById("player-value-1").innerText)+(parseInt(document.getElementById("player-value-2").innerText))+(parseInt(document.getElementById("player-value-3").innerText))+(parseInt(document.getElementById("player-value-4").innerText)));
            document.getElementById('playerTotal').textContent  = playerTotal;

            if (parseInt(document.getElementById('dealerTotal').textContent)  >'21'){
                fold();
                alert("Dealer Broke 21. You Win!");
                throw "Dealer Broke 21. You Win!";
            } else if (parseInt(document.getElementById('playerTotal').textContent)  >'21'){
                fold();
                alert("You Broke 21. You Lose!");
                throw "You Broke 21. You Lose!";
            } else if (parseInt(document.getElementById('playerTotal').textContent)  =='21'){
                fold();
                alert("You Got  21. You Win!");
                throw "You Got  21. You Win!";
            } else if (parseInt(document.getElementById('dealerTotal').textContent)  =='21'){
                fold();
                alert("Dealer Got  21. You Lose!");
                throw "Dealer Got  21. You Lose!";
            } 
             else{
                 if (this.getAttribute("data-type") === "new"  ) {
                    fold();
                    newDeal();
                     
               
                }  else if ((this.getAttribute("data-type") === "play") && (count !== 0)) {
                    checkTotals();
                    fold();
                } else if ((this.getAttribute("data-type") === "hold") && (count !== 0)) {
                    hold();
                    
                } else if ((this.getAttribute("data-type") === "hold") && (count == 0)) {
                    alert("You Need To Start A New Deal");
                    throw "You Need To Start A New Deal";
                } else if ((this.getAttribute("data-type") === "hit") && (count !== 0)) {
                    hitMe();
                    
                } else if ((this.getAttribute("data-type") === "hit") && (count == 0)) {
                    alert("You Need To Start A New Deal");
                    throw "You Need To Start A New Deal";
                } 
                else {
                    fold();
                }
                }
        })
    }
})




/**
 * Check Totals
 */
function checkTotals(){
    
    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText)+(parseInt(document.getElementById("dealer-value-2").innerText))+(parseInt(document.getElementById("dealer-value-3").innerText))+(parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent  = dealerTotal;
    
    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText)+(parseInt(document.getElementById("player-value-2").innerText))+(parseInt(document.getElementById("player-value-3").innerText))+(parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent  = playerTotal;

    if ((playerTotal > dealerTotal) && (playerTotal <= '21' ) && (playerTotal >= '15' )){
        alert(`You Win! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);
        throw (`You Win! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);
    } else if ((playerTotal < dealerTotal) && (dealerTotal <= '21' )&& (dealerTotal >= '15' )){
        alert(`You Lose! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);
        throw (`You Lose! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);
    }
    else {
        alert(`Your Call`);
        throw `Your Call`;
    }

    
}


/**
 * Fold
 */
function fold(){
    
    count = 0
    document.getElementById('dealer-image-1').src = "assets/images/empty.png"
    document.getElementById('dealer-image-2').src = "assets/images/empty.png"
    document.getElementById('dealer-image-3').src = "assets/images/empty.png"
    document.getElementById('dealer-image-4').src = "assets/images/empty.png"
    document.getElementById('player-image-1').src = "assets/images/empty.png"
    document.getElementById('player-image-2').src = "assets/images/empty.png"
    document.getElementById('player-image-3').src = "assets/images/empty.png"
    document.getElementById('player-image-4').src = "assets/images/empty.png"
    document.getElementById(`dealer-value-1`).textContent  = 0;
    document.getElementById(`dealer-value-2`).textContent  = 0;
    document.getElementById(`dealer-value-3`).textContent  = 0;
    document.getElementById(`dealer-value-4`).textContent  = 0;
    document.getElementById(`player-value-1`).textContent  = 0;
    document.getElementById(`player-value-2`).textContent  = 0;
    document.getElementById(`player-value-3`).textContent  = 0;
    document.getElementById(`player-value-4`).textContent  = 0;
    document.getElementById('dealerTotal').textContent  = 0;
    document.getElementById('playerTotal').textContent  = 0;
    
}


/**
 * Hold
 */
function hold(){
    
    count = ++count;
    const dealerInt = Math.floor(Math.random() * 13) + 1
    let dealer1 = dealerInt
    
    
    console.log(dealer1)
    
    console.log(count)

    
    document.getElementById(`dealer-value-${count}`).textContent  = dealer1;


    if (dealer1==1){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/ace_clubs.png"
    }
    else if(dealer1==2){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/2_clubs.png"
    }
    else if(dealer1==3){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/3_clubs.png"
    }
    else if(dealer1==4){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/4_clubs.png"
    }
    else if(dealer1==5){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/5_clubs.png"
    }
    else if(dealer1==6){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/6_clubs.png"
    }
    else if(dealer1==7){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/7_clubs.png"
    }
    else if(dealer1==8){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/8_clubs.png"
    }
    else if(dealer1==9){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/9_clubs.png"
    }
    else if(dealer1==10){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/10_clubs.png"
    }
    else if(dealer1==11){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/j_clubs.png"
    }
    else if(dealer1==12){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/q_clubs.png"
    }
    else if(dealer1==13){
        document.getElementById(`dealer-image-${count}`).src = "assets/images/clubs/k_clubs.png"
    }
    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText)+(parseInt(document.getElementById("dealer-value-2").innerText))+(parseInt(document.getElementById("dealer-value-3").innerText))+(parseInt(document.getElementById("dealer-value-4").innerText)));
            document.getElementById('dealerTotal').textContent  = dealerTotal;

    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText)+(parseInt(document.getElementById("player-value-2").innerText))+(parseInt(document.getElementById("player-value-3").innerText))+(parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent  = playerTotal;
}

/**
 * New Deal
 */

function newDeal(){
    count = 1;
   
    

    deck = Math.floor(Math.random() * 3)
    if (deck > 2) {
        deck2 = 0
   } else {
       deck2 = deck++
   }
    
    
    const playerInt = Math.floor(Math.random() * 13) + 1
    let player1 = playerInt
    console.log(playerInt)

    const dealerInt = Math.floor(Math.random() * 13) + 1
    let dealer1 = dealerInt
    console.log(dealerInt)
    console.log(count)
    
    


    if (player1==1){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][0]
    }
    else if(player1==2){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][1]
    }
    else if(player1==3){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][2]
    }
    else if(player1==4){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][3]
    }
    else if(player1==5){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][4]
    }
    else if(player1==6){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][5]
    }
    else if(player1==7){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][6]
    }
    else if(player1==8){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][7]
    }
    else if(player1==9){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][8]
    }
    else if(player1==10){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][9]
    }
    else if(player1==11){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][10]
    }
    else if(player1==12){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][11]
    }
    else if(player1==13){
        document.getElementById(`player-image-${count}`).src = decks[`${deck}`][12]
    }

    document.getElementById(`player-value-${count}`).textContent = player1;
    document.getElementById(`dealer-value-${count}`).textContent  = dealer1;

    if (dealer1==1){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][0]
    }
    else if(dealer1==2){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][1]
    }
    else if(dealer1==3){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][2]
    }
    else if(dealer1==4){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][3]
    }
    else if(dealer1==5){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][4]
    }
    else if(dealer1==6){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][5]
    }
    else if(dealer1==7){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][6]
    }
    else if(dealer1==8){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][7]
    }
    else if(dealer1==9){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][8]
    }
    else if(dealer1==10){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][9]
    }
    else if(dealer1==11){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][10]
    }
    else if(dealer1==12){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][11]
    }
    else if(dealer1==13){
        document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][12]
    }
    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText)+(parseInt(document.getElementById("dealer-value-2").innerText))+(parseInt(document.getElementById("dealer-value-3").innerText))+(parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent  = dealerTotal;
    
    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText)+(parseInt(document.getElementById("player-value-2").innerText))+(parseInt(document.getElementById("player-value-3").innerText))+(parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent  = playerTotal;
}

/**
 * Hit Me
 */
function hitMe(){
    deck = Math.floor(Math.random() * 3)
    if (deck > 2) {
        deck2 = 0
   } else {
       deck2 = deck++
   }
    
    count = ++count;
    const playerInt = Math.floor(Math.random() * 13) + 1
    let player1 = playerInt
    console.log(playerInt)

    const dealerInt = Math.floor(Math.random() * 13) + 1
    let dealer1 = dealerInt 
   
    console.log(dealerInt)
    console.log(count)

    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText)+(parseInt(document.getElementById("dealer-value-2").innerText))+(parseInt(document.getElementById("dealer-value-3").innerText))+(parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent  = dealerTotal;

    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText)+(parseInt(document.getElementById("player-value-2").innerText))+(parseInt(document.getElementById("player-value-3").innerText))+(parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent  = playerTotal;
    

    if (dealerTotal <= '15') {
 
        document.getElementById(`player-value-${count}`).textContent  = player1;
        document.getElementById(`dealer-value-${count}`).textContent = dealer1;
        if (player1==1){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][0]
        }
        else if(player1==2){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][1]
        }
        else if(player1==3){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][2]
        }
        else if(player1==4){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][3]
        }
        else if(player1==5){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][4]
        }
        else if(player1==6){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][5]
        }
        else if(player1==7){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][6]
        }
        else if(player1==8){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][7]
        }
        else if(player1==9){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][8]
        }
        else if(player1==10){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][9]
        }
        else if(player1==11){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][10]
        }
        else if(player1==12){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][11]
        }
        else if(player1==13){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][12]
        }
    
    
        if (dealer1==1){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][0]
        }
        else if(dealer1==2){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][1]
        }
        else if(dealer1==3){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][2]
        }
        else if(dealer1==4){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][3]
        }
        else if(dealer1==5){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][4]
        }
        else if(dealer1==6){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][5]
        }
        else if(dealer1==7){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][6]
        }
        else if(dealer1==8){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][7]
        }
        else if(dealer1==9){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][8]
        }
        else if(dealer1==10){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][9]
        }
        else if(dealer1==11){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][10]
        }
        else if(dealer1==12){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][11]
        }
        else if(dealer1==13){
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][12]
        }
        }   
        else  {
        document.getElementById(`dealer-value-${count}`).textContent  = '0';
        document.getElementById(`player-value-${count}`).textContent  = player1;
        if (player1==1){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][0]
        }
        else if(player1==2){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][1]
        }
        else if(player1==3){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][2]
        }
        else if(player1==4){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][3]
        }
        else if(player1==5){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][4]
        }
        else if(player1==6){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][5]
        }
        else if(player1==7){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][6]
        }
        else if(player1==8){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][7]
        }
        else if(player1==9){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][8]
        }
        else if(player1==10){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][9]
        }
        else if(player1==11){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][10]
        }
        else if(player1==12){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][11]
        }
        else if(player1==13){
            document.getElementById(`player-image-${count}`).src = decks[`${deck}`][12]
        }
    
        }
    
    
    dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText)+(parseInt(document.getElementById("dealer-value-2").innerText))+(parseInt(document.getElementById("dealer-value-3").innerText))+(parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent  = dealerTotal;

    playerTotal = (parseInt(document.getElementById("player-value-1").innerText)+(parseInt(document.getElementById("player-value-2").innerText))+(parseInt(document.getElementById("player-value-3").innerText))+(parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent  = playerTotal;

    
    
}



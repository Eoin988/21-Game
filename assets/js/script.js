var count = 0;

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
   
    

    
    
    const playerInt = Math.floor(Math.random() * 13) + 1
    let player1 = playerInt
    console.log(playerInt)

    const dealerInt = Math.floor(Math.random() * 13) + 1
    let dealer1 = dealerInt
    console.log(dealerInt)
    console.log(count)
    
    


    if (player1==1){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/ace_clubs.png"
    }
    else if(player1==2){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/2_clubs.png"
    }
    else if(player1==3){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/3_clubs.png"
    }
    else if(player1==4){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/4_clubs.png"
    }
    else if(player1==5){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/5_clubs.png"
    }
    else if(player1==6){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/6_clubs.png"
    }
    else if(player1==7){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/7_clubs.png"
    }
    else if(player1==8){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/8_clubs.png"
    }
    else if(player1==9){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/9_clubs.png"
    }
    else if(player1==10){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/10_clubs.png"
    }
    else if(player1==11){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/j_clubs.png"
    }
    else if(player1==12){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/q_clubs.png"
    }
    else if(player1==13){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/k_clubs.png"
    }

    document.getElementById(`player-value-${count}`).textContent = player1;
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
 * Hit Me
 */
function hitMe(){
    
    
    count = ++count;
    const playerInt = Math.floor(Math.random() * 13) + 1
    let player1 = playerInt
    console.log(playerInt)

    const dealerInt = Math.floor(Math.random() * 13) + 1
    let dealer1 = dealerInt
    console.log(dealerInt)
    console.log(count)

    document.getElementById(`player-value-${count}`).textContent  = player1;
    document.getElementById(`dealer-value-${count}`).textContent  = dealer1;
    if (player1==1){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/ace_clubs.png"
    }
    else if(player1==2){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/2_clubs.png"
    }
    else if(player1==3){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/3_clubs.png"
    }
    else if(player1==4){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/4_clubs.png"
    }
    else if(player1==5){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/5_clubs.png"
    }
    else if(player1==6){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/6_clubs.png"
    }
    else if(player1==7){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/7_clubs.png"
    }
    else if(player1==8){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/8_clubs.png"
    }
    else if(player1==9){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/9_clubs.png"
    }
    else if(player1==10){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/10_clubs.png"
    }
    else if(player1==11){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/j_clubs.png"
    }
    else if(player1==12){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/q_clubs.png"
    }
    else if(player1==13){
        document.getElementById(`player-image-${count}`).src = "assets/images/clubs/k_clubs.png"
    }


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



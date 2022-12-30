document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "new") {
                newDeal();
               
            } else if (this.getAttribute("data-type") === "hold") {
                hold();
              
            }
            else if (this.getAttribute("data-type") === "hit") {
                hitMe();
             
            }
            else if (this.getAttribute("data-type") === "fold") {
                fold();
            }
        })
    }

})







/**
 * Fold
 */
function fold(){
    document.getElementById("count").value = 0;
    let currentCount = document.getElementById("count").value;
    document.getElementById('dealer-image-1').src = "assets/images/empty.png"
    document.getElementById('dealer-image-2').src = "assets/images/empty.png"
    document.getElementById('dealer-image-3').src = "assets/images/empty.png"
    document.getElementById('dealer-image-4').src = "assets/images/empty.png"
    document.getElementById('player-image-1').src = "assets/images/empty.png"
    document.getElementById('player-image-2').src = "assets/images/empty.png"
    document.getElementById('player-image-3').src = "assets/images/empty.png"
    document.getElementById('player-image-4').src = "assets/images/empty.png"
    console.log(currentCount)

}


/**
 * Hold
 */
function hold(){
    let count = parseInt(document.getElementById("count").value);
    document.getElementById("count").value = ++count;
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
    
}

/**
 * New Deal
 */

function newDeal(){
    document.getElementById("count").value = 1;
    let count = parseInt(document.getElementById("count").value);
    

    
    
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
    
}

/**
 * Hit Me
 */
function hitMe(){
    
    let count = parseInt(document.getElementById("count").value);
    document.getElementById("count").value = ++count;
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

}



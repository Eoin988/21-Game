 //Create a count variable to track the current card placeholder
 var count = 0;
 //Create a variable to record the dealers total wins
 var dealerWin = 0;
 //Create a variable to record the players total wins
 var playerWin = 0;
 //Create an array to hold the different deck images
 const decks = Array();
 //Assign a random number between 0 and 3
 let deckInt = Math.floor(Math.random() * 3);
 //Assign the random number to select the first deck used
 let deck = deckInt;
 //Assign the random number to select the first deck used
 let deck2 = deck++;


 // Create arrays of deck suit and value images
 decks[0] = Array("assets/images/hearts/ace_hearts.png", "assets/images/hearts/2_hearts.png", "assets/images/hearts/3_hearts.png", "assets/images/hearts/4_hearts.png", "assets/images/hearts/5_hearts.png", "assets/images/hearts/6_hearts.png", "assets/images/hearts/7_hearts.png", "assets/images/hearts/8_hearts.png", "assets/images/hearts/9_hearts.png", "assets/images/hearts/10_hearts.png", "assets/images/hearts/j_hearts.png", "assets/images/hearts/q_hearts.png", "assets/images/hearts/k_hearts.png");
 decks[1] = Array("assets/images/clubs/ace_clubs.png", "assets/images/clubs/2_clubs.png", "assets/images/clubs/3_clubs.png", "assets/images/clubs/4_clubs.png", "assets/images/clubs/5_clubs.png", "assets/images/clubs/6_clubs.png", "assets/images/clubs/7_clubs.png", "assets/images/clubs/8_clubs.png", "assets/images/clubs/9_clubs.png", "assets/images/clubs/10_clubs.png", "assets/images/clubs/j_clubs.png", "assets/images/clubs/q_clubs.png", "assets/images/clubs/k_clubs.png");
 decks[2] = Array("assets/images/diamonds/ace_diamonds.png", "assets/images/diamonds/2_diamonds.png", "assets/images/diamonds/3_diamonds.png", "assets/images/diamonds/4_diamonds.png", "assets/images/diamonds/5_diamonds.png", "assets/images/diamonds/6_diamonds.png", "assets/images/diamonds/7_diamonds.png", "assets/images/diamonds/8_diamonds.png", "assets/images/diamonds/9_diamonds.png", "assets/images/diamonds/10_diamonds.png", "assets/images/diamonds/j_diamonds.png", "assets/images/diamonds/q_diamonds.png", "assets/images/diamonds/k_diamonds.png");
 decks[3] = Array("assets/images/spades/ace_spades.png", "assets/images/spades/2_spades.png", "assets/images/spades/3_spades.png", "assets/images/spades/4_spades.png", "assets/images/spades/5_spades.png", "assets/images/spades/6_spades.png", "assets/images/spades/7_spades.png", "assets/images/spades/8_spades.png", "assets/images/spades/9_spades.png", "assets/images/spades/10_spades.png", "assets/images/spades/j_spades.png", "assets/images/spades/q_spades.png", "assets/images/spades/k_spades.png");



 // Create event on button press
 document.addEventListener("DOMContentLoaded", function () {
     let buttons = document.getElementsByTagName("button");

     for (let button of buttons) {
         button.addEventListener("click", function () {
             let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
             document.getElementById('dealerTotal').textContent = dealerTotal;

             let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
             document.getElementById('playerTotal').textContent = playerTotal;

             //Create player wins message if dealertotal is greater than 21
             if (parseInt(document.getElementById('dealerTotal').textContent) > '21') {
                 fold();
                 incrementPlayerWins();
                 alert("Dealer Broke 21. You Win!");

                 // Create dealer wins message if dealertotal is greater than 21
             } else if (parseInt(document.getElementById('playerTotal').textContent) > '21') {
                 fold();
                 incrementDealerWins();
                 alert("You Broke 21. You Lose!");

                 // Create player wins message if playertotal is  equal to 21
             } else if (parseInt(document.getElementById('playerTotal').textContent) == '21') {
                 fold();
                 incrementPlayerWins();
                 alert("You Got  21. You Win!");

                 // Create dealer wins message if dealertotal is equal to 21
             } else if (parseInt(document.getElementById('dealerTotal').textContent) == '21') {
                 fold();
                 incrementDealerWins();
                 alert("Dealer Got  21. You Lose!");

             } else {

                 // Create new game
                 if (this.getAttribute("data-type") === "new") {
                     fold();
                     newDeal();
                 }

                 // check for play button count value is not equal 0.Run checkTotals function.
                 else if ((this.getAttribute("data-type") === "play") && (count !== 0)) {
                     checkTotals();
                     fold();

                 }

                 //check for hold button and count value is not equal 0. Run Hold function.
                 else if ((this.getAttribute("data-type") === "hold") && (count !== 0)) {
                     hold();

                 }

                 // Create message if hold button is pressed before starting a game.
                 else if ((this.getAttribute("data-type") === "hold") && (count == 0)) {
                     alert("You Need To Start A New Deal");

                 }

                 // check
                 // for hit me button and count value is not equal 0. Run hitMe
                 // function.
                 else if ((this.getAttribute("data-type") === "hit") && (count !== 0)) {
                     hitMe();

                 }

                 // Create message if hit me button is pressed before starting a game.
                 else if ((this.getAttribute("data-type") === "hit") && (count == 0)) {
                     alert("You Need To Start A New Deal");

                 }

                 // Run fold function on any other condition
                 else {
                     fold();
                 }
             }
         });
     }
 });


 // count player win
 function incrementPlayerWins() {
     playerWin = ++playerWin;
     document.getElementById('playerWins').textContent = playerWin;

 }

 // count dealer win
 function incrementDealerWins() {
     dealerWin = ++dealerWin;
     document.getElementById('dealerWins').textContent = dealerWin;

 }


 // Play, Check Totals---------------------------------------------------------------------------------------------------------------------------------------------------------------
 function checkTotals() {



     // increment number of player wins
     function playerWins() {
         playerWin = ++playerWin;
         document.getElementById('playerWins').textContent = playerWin;

     }

     // increment number of dealer wins
     function dealerWins() {
         dealerWin = ++dealerWin;
         document.getElementById('dealerWins').textContent = dealerWin;

     }

     // calculate dealer total

     let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
     document.getElementById('dealerTotal').textContent = dealerTotal;

     // calculate dealer total
     let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
     document.getElementById('playerTotal').textContent = playerTotal;

     // create player wins message and show scores
     if ((playerTotal > dealerTotal) && (playerTotal <= '21') && (playerTotal >= '15')) {
         playerWins();
         alert(`You Win! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);

         // create dealer wins message and show scores
     } else if ((playerTotal < dealerTotal) && (dealerTotal <= '21') && (dealerTotal >= '15')) {
         dealerWins();
         alert(`You Lose! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);


         // create your call message if no winner
     } else {
         alert(`Your Call`);

     }


 }



 // Fold, quit hand and forfeit score----------------------------------------------------------------------------------------------------------------------------------
 function fold() {

     count = 0;
     document.getElementById('dealer-image-1').src = "assets/images/empty.png";
     document.getElementById('dealer-image-2').src = "assets/images/empty.png";
     document.getElementById('dealer-image-3').src = "assets/images/empty.png";
     document.getElementById('dealer-image-4').src = "assets/images/empty.png";
     document.getElementById('player-image-1').src = "assets/images/empty.png";
     document.getElementById('player-image-2').src = "assets/images/empty.png";
     document.getElementById('player-image-3').src = "assets/images/empty.png";
     document.getElementById('player-image-4').src = "assets/images/empty.png";
     document.getElementById(`dealer-value-1`).textContent = 0;
     document.getElementById(`dealer-value-2`).textContent = 0;
     document.getElementById(`dealer-value-3`).textContent = 0;
     document.getElementById(`dealer-value-4`).textContent = 0;
     document.getElementById(`player-value-1`).textContent = 0;
     document.getElementById(`player-value-2`).textContent = 0;
     document.getElementById(`player-value-3`).textContent = 0;
     document.getElementById(`player-value-4`).textContent = 0;
     document.getElementById('dealerTotal').textContent = 0;
     document.getElementById('playerTotal').textContent = 0;

 }



 // Hold, players skip a turn and dealer gets new card if dealertotal is less than 15--------------------------------------------------------------------------------------------
 function hold() {

     // Increment the counter for card number requiring change.
     count = ++count;


     // Create random number to select deck
     deck = Math.floor(Math.random() * 3);
     if (deck > 2) {
         deck2 = 0;
     } else {
         deck2 = deck++;
     }


     // Create random number to select card value
     const dealerInt = Math.floor(Math.random() * 13);
     let dealer1 = dealerInt;


     // Assign latest value to dealers total score
     let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
     document.getElementById('dealerTotal').textContent = dealerTotal;


     // Assign latest value to players total score
     let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
     document.getElementById('playerTotal').textContent = playerTotal;


     if (dealerTotal <= '15') {

         // Assign value to next dealer card
         document.getElementById(`dealer-value-${count}`).textContent = dealer1;



         // Assign card image
         switch (dealer1) {
             case 1:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 2:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 3:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 4:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 5:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 6:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 7:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 8:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 9:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 10:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 11:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 12:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 13:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
         }


     } else {

         // Assign next dealer card value to zero
         document.getElementById(`dealer-value-${count}`).textContent = '0';
     }
 }


 // New Deal, starts a new game-------------------------------------------------------------------------------------------------------------------------------------

 function newDeal() {


     // Start the counter at 1 for card number requiring change.
     count = 1;



     // Create random number to select deck
     deck = Math.floor(Math.random() * 3);
     if (deck > 2) {
         deck2 = 0;
     } else {
         deck2 = deck++;
     }


     // Create random number to select next player card value
     const playerInt = Math.floor(Math.random() * 13) + 1;
     let player1 = playerInt;


     // Create random number to select next dealer card value
     const dealerInt = Math.floor(Math.random() * 13) + 1;
     let dealer1 = dealerInt;





     // Assign card image to next player card
     switch (player1) {
         case 1:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][0];
             break;
         case 2:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][1];
             break;
         case 3:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][2];
             break;
         case 4:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][3];
             break;
         case 5:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][4];
             break;
         case 6:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][5];
             break;
         case 7:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][6];
             break;
         case 8:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][7];
             break;
         case 9:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][8];
             break;
         case 10:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][9];
             break;
         case 11:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][10];
             break;
         case 12:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][11];
             break;
         case 13:
             document.getElementById(`player-image-${count}`).src = decks[`${deck}`][12];
             break;
     }

     // Assign value to next player and dealer card value.
     document.getElementById(`player-value-${count}`).textContent = player1;
     document.getElementById(`dealer-value-${count}`).textContent = dealer1;

     // Assign reverse card image to next dealer card 
     switch (dealer1) {
         case 1:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 2:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 3:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 4:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 5:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 6:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 7:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 8:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 9:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 10:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 11:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 12:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
         case 13:
             document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
             break;
     }

     // Assign latest value to dealers total score
     let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
     document.getElementById('dealerTotal').textContent = dealerTotal;

     // Assign latest value to players total score
     let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
     document.getElementById('playerTotal').textContent = playerTotal;
 }


 // Hit Me, player and dealer get next card. Dealer only get new card if current dealertotal is less than 15---------------------------------------------------------------


 // Create random number to select deck

 function hitMe() {
     deck = Math.floor(Math.random() * 3);
     if (deck > 2) {
         deck2 = 0;
     } else {
         deck2 = deck++;
     }


     // Increment the counter for next card position requiring change.
     count = ++count;


     // Create random number to select next player card value
     const playerInt = Math.floor(Math.random() * 13) + 1;
     let player1 = playerInt;


     // Create random number to select next dealer card value
     const dealerInt = Math.floor(Math.random() * 13) + 1;
     let dealer1 = dealerInt;



     // Assign latest value to dealers total score
     let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
     document.getElementById('dealerTotal').textContent = dealerTotal;

     // Assign latest value to dealers total score
     let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
     document.getElementById('playerTotal').textContent = playerTotal;


     // Create condition to only deal new card for dealer if dealers total is less than 15
     if (dealerTotal <= '15') {

         document.getElementById(`player-value-${count}`).textContent = player1;
         document.getElementById(`dealer-value-${count}`).textContent = dealer1;


         // Assign card image to next player card
         switch (player1) {
             case 1:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][0];
                 break;
             case 2:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][1];
                 break;
             case 3:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][2];
                 break;
             case 4:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][3];
                 break;
             case 5:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][4];
                 break;
             case 6:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][5];
                 break;
             case 7:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][6];
                 break;
             case 8:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][7];
                 break;
             case 9:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][8];
                 break;
             case 10:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][9];
                 break;
             case 11:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][10];
                 break;
             case 12:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][11];
                 break;
             case 13:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][12];
                 break;
         }


         // Assign reverse card image to next dealer card
         switch (dealer1) {
             case 1:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 2:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 3:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 4:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 5:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 6:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 7:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 8:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 9:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 10:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 11:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 12:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
             case 13:
                 document.getElementById(`dealer-image-${count}`).src = "assets/images/reverse.png";
                 break;
         }
     } else {

         // Assign next dealer value to zero
         document.getElementById(`dealer-value-${count}`).textContent = '0';

         // Assign next player value to number created
         document.getElementById(`player-value-${count}`).textContent = player1;

         // Assign card image to next player card
         switch (player1) {
             case 1:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][0];
                 break;
             case 2:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][1];
                 break;
             case 3:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][2];
                 break;
             case 4:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][3];
                 break;
             case 5:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][4];
                 break;
             case 6:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][5];
                 break;
             case 7:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][6];
                 break;
             case 8:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][7];
                 break;
             case 9:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][8];
                 break;
             case 10:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][9];
                 break;
             case 11:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][10];
                 break;
             case 12:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][11];
                 break;
             case 13:
                 document.getElementById(`player-image-${count}`).src = decks[`${deck}`][12];
                 break;
         }

     }


     // Assign latest value to dealers total score
     dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
     document.getElementById('dealerTotal').textContent = dealerTotal;

     // Assign latest value to players total score
     playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
     document.getElementById('playerTotal').textContent = playerTotal;



 }
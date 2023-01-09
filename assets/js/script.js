var count = 0;
var dealerWin = 0;
var playerWin = 0;
const used = [];
const decks = Array();
let deckInt = Math.floor(Math.random() * 3)
let deck = deckInt
let deck2 = deck++

decks[0] = Array("assets/images/hearts/ace_hearts.png", "assets/images/hearts/2_hearts.png", "assets/images/hearts/3_hearts.png", "assets/images/hearts/4_hearts.png", "assets/images/hearts/5_hearts.png", "assets/images/hearts/6_hearts.png", "assets/images/hearts/7_hearts.png", "assets/images/hearts/8_hearts.png", "assets/images/hearts/9_hearts.png", "assets/images/hearts/10_hearts.png", "assets/images/hearts/j_hearts.png", "assets/images/hearts/q_hearts.png", "assets/images/hearts/k_hearts.png")
decks[1] = Array("assets/images/clubs/ace_clubs.png", "assets/images/clubs/2_clubs.png", "assets/images/clubs/3_clubs.png", "assets/images/clubs/4_clubs.png", "assets/images/clubs/5_clubs.png", "assets/images/clubs/6_clubs.png", "assets/images/clubs/7_clubs.png", "assets/images/clubs/8_clubs.png", "assets/images/clubs/9_clubs.png", "assets/images/clubs/10_clubs.png", "assets/images/clubs/j_clubs.png", "assets/images/clubs/q_clubs.png", "assets/images/clubs/k_clubs.png")
decks[2] = Array("assets/images/diamonds/ace_diamonds.png", "assets/images/diamonds/2_diamonds.png", "assets/images/diamonds/3_diamonds.png", "assets/images/diamonds/4_diamonds.png", "assets/images/diamonds/5_diamonds.png", "assets/images/diamonds/6_diamonds.png", "assets/images/diamonds/7_diamonds.png", "assets/images/diamonds/8_diamonds.png", "assets/images/diamonds/9_diamonds.png", "assets/images/diamonds/10_diamonds.png", "assets/images/diamonds/j_diamonds.png", "assets/images/diamonds/q_diamonds.png", "assets/images/diamonds/k_diamonds.png")
decks[3] = Array("assets/images/spades/ace_spades.png", "assets/images/spades/2_spades.png", "assets/images/spades/3_spades.png", "assets/images/spades/4_spades.png", "assets/images/spades/5_spades.png", "assets/images/spades/6_spades.png", "assets/images/spades/7_spades.png", "assets/images/spades/8_spades.png", "assets/images/spades/9_spades.png", "assets/images/spades/10_spades.png", "assets/images/spades/j_spades.png", "assets/images/spades/q_spades.png", "assets/images/spades/k_spades.png")



document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
            document.getElementById('dealerTotal').textContent = dealerTotal;

            let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
            document.getElementById('playerTotal').textContent = playerTotal;

            if (parseInt(document.getElementById('dealerTotal').textContent) > '21') {
                fold();
                incrementPlayerWins();
                alert("Dealer Broke 21. You Win!");
                throw "Dealer Broke 21. You Win!";
            } else if (parseInt(document.getElementById('playerTotal').textContent) > '21') {
                fold();
                incrementDealerWins();
                alert("You Broke 21. You Lose!");
                throw "You Broke 21. You Lose!";
            } else if (parseInt(document.getElementById('playerTotal').textContent) == '21') {
                fold();
                incrementPlayerWins();
                alert("You Got  21. You Win!");
                throw "You Got  21. You Win!";
            } else if (parseInt(document.getElementById('dealerTotal').textContent) == '21') {
                fold();
                incrementDealerWins();
                alert("Dealer Got  21. You Lose!");
                throw "Dealer Got  21. You Lose!";
            } else {
                if (this.getAttribute("data-type") === "new") {
                    fold();
                    newDeal();


                } else if ((this.getAttribute("data-type") === "play") && (count !== 0)) {
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
                } else {
                    fold();
                }
            }
        })
    }
})

/**
 * count player pass
 */
function incrementPlayerWins() {
    playerWin = ++playerWin
    document.getElementById('playerWins').textContent = playerWin;

}
/**
 * count player pass
 */
function incrementDealerWins() {
    dealerWin = ++dealerWin
    document.getElementById('dealerWins').textContent = dealerWin;

}

/**
 * Check Totals
 */
function checkTotals() {
    function playerWins() {
        playerWin = ++playerWin
        document.getElementById('playerWins').textContent = playerWin;

    }

    function dealerWins() {
        dealerWin = ++dealerWin
        document.getElementById('dealerWins').textContent = dealerWin;

    }

    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent = dealerTotal;

    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent = playerTotal;

    if ((playerTotal > dealerTotal) && (playerTotal <= '21') && (playerTotal >= '15')) {
        playerWins();
        alert(`You Win! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);

    } else if ((playerTotal < dealerTotal) && (dealerTotal <= '21') && (dealerTotal >= '15')) {
        dealerWins();
        alert(`You Lose! You Got ${playerTotal}, Dealer Got ${dealerTotal}`);


    } else {
        alert(`Your Call`);

    }


}


/**
 * Fold
 */
function fold() {

    count = 0
    document.getElementById('dealer-image-1').src = "assets/images/empty.png"
    document.getElementById('dealer-image-2').src = "assets/images/empty.png"
    document.getElementById('dealer-image-3').src = "assets/images/empty.png"
    document.getElementById('dealer-image-4').src = "assets/images/empty.png"
    document.getElementById('player-image-1').src = "assets/images/empty.png"
    document.getElementById('player-image-2').src = "assets/images/empty.png"
    document.getElementById('player-image-3').src = "assets/images/empty.png"
    document.getElementById('player-image-4').src = "assets/images/empty.png"
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


/**
 * Hold
 */
function hold() {

    count = ++count;

    deck = Math.floor(Math.random() * 3)
    if (deck > 2) {
        deck2 = 0
    } else {
        deck2 = deck++
    }

    const dealerInt = Math.floor(Math.random() * 13)
    let dealer1 = dealerInt




    document.getElementById(`dealer-value-${count}`).textContent = dealer1;


    switch (dealer1) {
        case 1:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][0];
            break;
        case 2:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][1];
            break;
        case 3:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][2];
            break;
        case 4:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][3];
            break;
        case 5:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][4];
            break;
        case 6:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][5];
            break;
        case 7:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][6];
            break;
        case 8:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][7];
            break;
        case 9:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][8];
            break;
        case 10:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][9];
            break;
        case 11:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][10];
            break;
        case 12:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][11];
            break;
        case 13:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][12];
            break;
    }
    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent = dealerTotal;

    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent = playerTotal;
}

/**
 * New Deal
 */

function newDeal() {
    count = 1;



    deck = Math.floor(Math.random() * 3)
    if (deck > 2) {
        deck2 = 0
    } else {
        deck2 = deck++
    }


    const playerInt = Math.floor(Math.random() * 13) + 1
    let player1 = playerInt


    const dealerInt = Math.floor(Math.random() * 13) + 1
    let dealer1 = dealerInt





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

    document.getElementById(`player-value-${count}`).textContent = player1;
    document.getElementById(`dealer-value-${count}`).textContent = dealer1;

    switch (dealer1) {
        case 1:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][0];
            break;
        case 2:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][1];
            break;
        case 3:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][2];
            break;
        case 4:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][3];
            break;
        case 5:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][4];
            break;
        case 6:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][5];
            break;
        case 7:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][6];
            break;
        case 8:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][7];
            break;
        case 9:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][8];
            break;
        case 10:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][9];
            break;
        case 11:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][10];
            break;
        case 12:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][11];
            break;
        case 13:
            document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][12];
            break;
    }
    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent = dealerTotal;

    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent = playerTotal;
}

/**
 * Hit Me
 */
function hitMe() {
    deck = Math.floor(Math.random() * 3)
    if (deck > 2) {
        deck2 = 0
    } else {
        deck2 = deck++
    }

    count = ++count;
    const playerInt = Math.floor(Math.random() * 13) + 1
    let player1 = playerInt


    const dealerInt = Math.floor(Math.random() * 13) + 1
    let dealer1 = dealerInt



    let dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent = dealerTotal;

    let playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent = playerTotal;


    if (dealerTotal <= '15') {

        document.getElementById(`player-value-${count}`).textContent = player1;
        document.getElementById(`dealer-value-${count}`).textContent = dealer1;
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


        switch (dealer1) {
            case 1:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][0];
                break;
            case 2:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][1];
                break;
            case 3:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][2];
                break;
            case 4:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][3];
                break;
            case 5:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][4];
                break;
            case 6:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][5];
                break;
            case 7:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][6];
                break;
            case 8:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][7];
                break;
            case 9:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][8];
                break;
            case 10:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][9];
                break;
            case 11:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][10];
                break;
            case 12:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][11];
                break;
            case 13:
                document.getElementById(`dealer-image-${count}`).src = decks[`${deck2}`][12];
                break;
        }
    } else {
        document.getElementById(`dealer-value-${count}`).textContent = '0';
        document.getElementById(`player-value-${count}`).textContent = player1;
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


    dealerTotal = (parseInt(document.getElementById("dealer-value-1").innerText) + (parseInt(document.getElementById("dealer-value-2").innerText)) + (parseInt(document.getElementById("dealer-value-3").innerText)) + (parseInt(document.getElementById("dealer-value-4").innerText)));
    document.getElementById('dealerTotal').textContent = dealerTotal;

    playerTotal = (parseInt(document.getElementById("player-value-1").innerText) + (parseInt(document.getElementById("player-value-2").innerText)) + (parseInt(document.getElementById("player-value-3").innerText)) + (parseInt(document.getElementById("player-value-4").innerText)));
    document.getElementById('playerTotal').textContent = playerTotal;



}
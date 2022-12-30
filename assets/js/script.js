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
 * New Deal
 */

function newDeal(){
    const rndInt = Math.floor(Math.random() * 12) + 1
    let player1 = 1
    console.log("1")
    
    if (player1==1){
        document.getElementById('player-image-1').src = "~/assets/images/ace_clubs.png"
    }


}
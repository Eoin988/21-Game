# 21 Game

21 Game is a fun  game where the user can play a simple version of 21's or Blackjack.
The player is able to view thier cards and values but not the computers. The player needs to make the a decision on what for the best next move in order to get closest to 21.



![Responsice Mockup](https://github.com/Eoin988/21-Game/blob/main/assets/media/mockup.PNG)

## Features 


### Existing Features Index Page

- __Header__

  - Featured at the top of the page, the full responsive icon links to the rules page. the rules page gives the user any rules needed to understand the game. 
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](https://github.com/Eoin988/21-Game/blob/main/assets/media/rules.PNG)

- __Dealer Wins__

  - The amount of wins the dealer has acumilated is shown here.
  

![Dealer Wins](https://github.com/Eoin988/21-Game/blob/main/assets/media/dealer-wins.PNG)

- __Dealers Hand__

  - The dealers hand is shown here. The player can't see the dealers cards, but can see how many cards the dealer has.
  

![Dealers Hand](https://github.com/Eoin988/21-Game/blob/main/assets/media/dealer-hand.PNG)

- __Deck and New game area__

  - The deck is held here and the New Deal button is shown. 
  - This is where every game or round must start. 
 

![Deck and New Deal](https://github.com/Eoin988/21-Game/blob/main/assets/media/deck.PNG)

- __Your Total__ 

  - The players total value of cards is shown. The player must get this value as close to 21 as possible.


![Your Total](https://github.com/Eoin988/21-Game/blob/main/assets/media/player-total.PNG)

- __Your Values__ 

  - The players individual card values are shown here
 

![Your Values](https://github.com/Eoin988/21-Game/blob/main/assets/media/player-values.PNG)

- __Players Hand__ 

  - The players hand is shown here. The player can see their own cards.

  

![Players Hand](https://github.com/Eoin988/21-Game/blob/main/assets/media/player-hand.PNG)

- __Player Wins__ 

  - The amount of wins the dealer has acumilated is shown here.

  

![Player Wins](https://github.com/Eoin988/21-Game/blob/main/assets/media/player-wins.PNG)

- __Game Controls__ 

  - The player controls the game from here. They can choose to; 
  Hold, this lets the player skip a round. But will let the dealer recieve a new card if the dealer has less than 15.  
  Hit Me!, this lets the player and dealer recieve a new card.
  Fold, this fofiets the current hand
  Play, this will check who has the closest to 21 and decide on a winner.

  

![Game Controls](https://github.com/Eoin988/21-Game/blob/main/assets/media/controls.PNG)
### Existing Features Rules Page

- __Rules Page Information__

  - The rules page gives more information on rules and how to play. 
 

![Rules](https://github.com/Eoin988/21-Game/blob/main/assets/media/rules-page.PNG)




### Features Left to Implement

- Add a function to show the dealers values after a result is achieved.

## Testing 


- I maunally tested each function as it was created
- Some control functions could not be used before a game was started, so a message was implemented for when this case occured. Each button that needed this message was tested manually.
- Each function was fully tested individually first, then all together when all functions had been creeated and implemented.
 - I confirmed the colours and fonts chosen are easy to read by running it through lighthouse in devtools [W3C validator](https://github.com/Eoin988/21-Game/blob/main/assets/media/lighthouse.PNG)




### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://github.com/Eoin988/21-Game/blob/main/assets/media/index-validator.PNG) [W3C validator](https://github.com/Eoin988/21-Game/blob/main/assets/media/rules-validator.PNG)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://github.com/Eoin988/21-Game/blob/main/assets/media/css-validator.PNG)
- js
  - No errors were found, but 164 warnigs were found when passing through the official [(jshint](https://github.com/Eoin988/21-Game/blob/main/assets/media/css-validator.PNG)
### Unfixed Bugs

  - Some sizing issues are still present although everything can be still viewed on all screeen sizes.
  - All card assigning functions use a switch case. There is no default case, this is due to there being no need for a default case, as only one of the assigned cases can be called in each function.

## Deployment



- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select Deploy from a branch.
  - Select Main in the branch drop down
  - Once the main branch has been selected, press save and allow the site to be deployed
  - Once complete and address is shown for the website.

The live link can be found here -  https://eoin988.github.io/21-Game/


## Credits 

### Content 

-  The code used for the index and rules pages was mostly taken from the wood-sessions project.[github](https://github.com/Eoin988/wood-sessions)
- The code used in the javascript functions based on the code from the love maths sample project.[github](https://github.com/Eoin988/love-maths)
- The Read me file structure was taken from the example Readme file. 

### Media

- The card images were cut individally cut from the iStock website. [iStock](https://www.istockphoto.com/vector/52-classic-playing-cards-with-jokers-gm1299841218-392348015?phrase=playing%20cards)
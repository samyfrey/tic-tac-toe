This application allows a user to play the game of Tic Tac Toe
In order to play, the user needs to sign in to their account. If the user doesn't have an account, they can sign up. To sign up, they will need an email address and a password and be able to confirm that password. Once the user can play, they can play alone or with someone else(not against the computer). A user wins the game, as soon as a they have placed on the board a combination of 3 of their own tokens, aligned either horizontally, vertically or diagonally. 


**User Stories**

As a user: 
* I want to sign into my account and play the game
* I want to be able sign up for a new account so I can play the game
* Once I am done playing, I want to be able to start over **or sign out**
* When I play, I want to know as soon as I have won or lost 
* I want to be able to play the game either on a computer or on my phone and or tablet 


**Explanation of the App**

For this project, I have used the following concepts studied in class:
- array iteration methods
- ternary operators
- arrow functions 
- OR logical statements
- jquery and regular JS (querySelector) to work with HTML elements
- object dot notation
- nested return statements and truthy/falsy (boolean)
- bootstrap to style my buttons 
- SPA 
- APIs and curl requests 
Through my research, I also came across the [...] spread operator so I could use an array iteration method (.every) directly off the querySelector element (each of my game board cell). This allowed me to run a forEach loop and attach an event listener to each of those HTML elements.  

The main logic for this game was to assign class names to divs clicked by the users and compare them with an array of arrays of winning combinations. 

Essentially, the apps works as follows (handleCellClick):
- click event (event.target) allows to:
- check who's player turn is
- let the user put their token on the board game (assign their class to the board game cell clicked)
- check if there is a winner every time (checkWin)
  - if there is a winner run endGame with tie arg false (see below)
  - if there is a tie (gameTie) run endGame with the tie arg true
  - if there is no winner, run swapTurn (changes curren player) and image of who's turn it is
- let the user click and function run over again until there is a winner


For my checkWin function, I am using nested return elements which work as follows: 
- checks if for at least 1 array of the winning combinations (.some):
- each of the element of this array has (.every and i):
- the class of my current player (contains and currentPlayer)

if all 3 conditions are true then we have a winner (returns true)

For my gameTie function:
- spread operator allows to turn the querySelector object (each board game cell) into an array 
- use the .every method on that array to check if:
- each board game cell has a class (either one)

if those conditions are met, then that functions returns true and trigger the endGame(tie) scenario. 

For the endGame(tie) function: 
- check which situations the user is in after each move, either:
- tie then triggers the related msg
- or if there is no tie, the game is over 

Single Page Application:
I have used hide() show() as the flow of the game goes to use a single page for this game, wether it is for playing, signing in, up or out. The user is able to switch between screens by clicking on buttons that have event listeners (which trigger the hide/show()). Some buttons have the function to submit actual data (api) but others are only to navigate through the site (nav btns)

For the development of this project, in addition to the regular files we have been using (api, ui, app, event), I have created the file game.js for my game logic. I am able to use that new file in the other files through module.exports and require(). 

For styling, I have used fonts from Google fonts, worked with IDs and classes, and multiple IDs. I also used mediaqueries to make the site responsive to different screen sizes. 


**Strech**
- allow user to chose an img or token 
- use ::before and ::after to style headings
- save game results 

Link to github repo
https://github.com/samyfrey/tic-tac-toe

Link to wireframes 
public/wireframes

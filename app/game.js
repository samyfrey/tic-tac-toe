const cells = document.querySelectorAll('.cell')
const winnerMessage = document.querySelector('#winner-display')
const currentPlayerImg = document.querySelector('.currentPlayer')
const winnerImg = document.querySelector('.winner-img')

let playerXTurn = true

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const startGame = () => {
  cells.forEach((cell) => {
    // allows to reset the board whenever we start a new game (at init or most importantly play again)
    cell.classList.remove('playerX')
    cell.classList.remove('playerY')
    cell.removeEventListener('click', handleCellClick)
    // once : true means event listener can only be triggered once
    cell.addEventListener('click', handleCellClick, { once: true })
  })
}

const swapTurns = () => {
  playerXTurn = !playerXTurn
}

const gameTie = () => {
  // spread notation so i'm able to work with the cells var (HTML elements) as an array
  return [...cells].every(cell => {
    // returns true if each cell has either a class of playerX or playerY
    return cell.classList.contains('playerX') || cell.classList.contains('playerY')
  })
}

const updateCurrentPlayer = () => {
  if (playerXTurn) {
    currentPlayerImg.src = 'public/hippo.png'
  } else {
    currentPlayerImg.src = 'public/croco.png'
  }
}

const handleCellClick = (event) => {
  const cell = event.target
  // conditional (ternary) operator
  const currentPlayer = playerXTurn ? 'playerX' : 'playerY'
  placePlayerImg(cell, currentPlayer)

  if (checkWin(currentPlayer)) {
    endGame(false)
  } else if (gameTie()) {
    endGame(true)
  } else {
    swapTurns()
    updateCurrentPlayer()
  }
}

const placePlayerImg = (cell, currentPlayer) => {
  cell.classList.add(currentPlayer)
}
// nested return statements
const checkWin = (currentPlayer) => {
  return winningCombinations.some(combination => {
    return combination.every(i => {
      return cells[i].classList.contains(currentPlayer)
    })
  })
}

const endGame = (tie) => {
  if (tie) {
    winnerMessage.innerText = "It's a tie! Game Over!"
    winnerImg.src = ''
  } else {
    winnerMessage.innerText = playerXTurn ? 'Hippo won!' : 'Croco won!'
    winnerImg.src = playerXTurn ? 'public/hippo.png' : 'public/croco.png'
  }
  $('#game-screen').hide()
  $('#game-over-screen').show()
  $('#winner-display').show()
}

startGame()

module.exports = {
  startGame
}

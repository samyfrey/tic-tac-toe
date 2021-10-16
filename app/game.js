
// can use box instead of cells too

const cells = document.querySelectorAll('.cell')
const winnerMessage = document.querySelector('.winner-display')


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
    cell.addEventListener('click', handleCellClick, { once: true })
  })
}

const swapTurns = () => {
  playerXTurn = !playerXTurn
}

const gameTie = () => {
  return [...cells].every(cell => {
    return cell.classList.contains('playerX') || cell.classList.contains('playerY')
  })
}

const handleCellClick = (event) => {
  const cell = event.target
  const currentPlayer = playerXTurn ? 'playerX' : 'playerY'
  placePlayerImg(cell, currentPlayer)

  if (checkWin(currentPlayer)) {
    endGame(false)
  } else if (gameTie()) {
    endGame(true)
  } else {
    swapTurns()
  }
  //   console.log(checkWin(currentPlayer))
}

const placePlayerImg = (cell, currentPlayer) => {
  cell.classList.add(currentPlayer)
}

const checkWin = (currentPlayer) => {
  return winningCombinations.some(combination => {
    return combination.every(i => {
      return cells[i].classList.contains(currentPlayer)
    })
  })
}

const endGame = (tie) => {
  // winnerMsg needs to be on endPage
  if (tie) {
    winnerMessage.innerText = "It's a tie! Game Over!"
    // show endPage instead with message
  } else {
    winnerMessage.innerText = playerXTurn ? 'Player X won' : 'Player Y won'
  }
  $('#game-screen').hide()
  $('#game-over-screen').show()
}

// resetButton.addEventListener('click', startGame)

startGame()

module.exports = {
  startGame
}

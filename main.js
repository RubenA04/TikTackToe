// let playertext = document.getElementById('playerText')
// let restartBtn = document.getElementById('restartBtn')
// let boxes = Array.from(document.getElementsByClassName('box'))

// let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

// const O_TEXT = "O"
// const X_TEXT = "X"
// let currentPlayer = X_TEXT

// let spaces = Array(9).fill(null)

// const startGame = () => {
//     boxes.forEach(box => box.addEventListener('click', boxClicked))
// }

// function boxClicked(e) {
//     console.log(e.target)
//     const id = e.target.id

//     if(!spaces[id]){
//         spaces[id] = currentPlayer 
//        e.target.innerText = currentPlayer 

//        if(playerHasWon() !==false){
//         playerText = `${currentPlayer} Has Won`
//         let winning_blocks = playerHasWon()

//         winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
//         return


//        }

//        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
//     }
// }

// const winningCombos = [
//     [0, 1, 2]
//     [3, 4, 5]
//     [6, 7, 8]
//     [0, 4, 8]
//     [2, 4, 6]
//     [0, 1, 2]
//     [0, 3, 6]
//     [1, 4, 7]
//     [2, 5, 8]
// ]

// function playerHasWon() {
//     for (const condition of winningCombos) {
//         let [a,b,c] = condition

//         if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
//             return [a,b,c]
//         }
//     }
//     return false
// }

// restartBtn.addEventListener('click', restart)

// function restart() {
//     spaces.fill(null)

//     boxes.forEach( box => {
//         box.innerText = ''
//         box.style.backgroundColor = ''
//     })

//     playerText.textContent = 'Tik Tac Toe'
//     currentPlayer = X_TEXT
// }

// startGame()

let playertext = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT

let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}



function boxClicked(e) {
    console.log(e.target)
    const id = e.target.id

    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if (playerHasWon() !== false) {
            playerText.textContent = `${currentPlayer} Has Won`
            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
]


function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c]
        }
    }
    return false
    // winnging_blocks.map( box => boxes)
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    playerText.textContent = 'Tic Tac Toe'
    currentPlayer = X_TEXT
}

startGame()
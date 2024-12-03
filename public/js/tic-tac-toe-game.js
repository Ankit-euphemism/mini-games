const board = document.getElementById('tic-tac-toe-board');
const resetButton = document.getElementById('reset-tic-tac-toe');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const createBoard = () => {
    board.innerHTML = '';
    gameState.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.textContent = cell;
        cellDiv.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cellDiv);
    });
};

const handleCellClick = (index) => {
    if (gameState[index] === '') {
        gameState[index] = currentPlayer;
        if (checkWin()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        createBoard();
    }
};

const checkWin = () => {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
};

resetButton.addEventListener('click', () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    createBoard();
});

createBoard();

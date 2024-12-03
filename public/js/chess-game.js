// Chess game logic will go here

const chessBoard = document.getElementById('chess-board');

const createChessBoard = () => {
    chessBoard.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'chess-row';
        for (let col = 0; col < 8; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'chess-cell';
            cellDiv.style.width = '50px';
            cellDiv.style.height = '50px';
            cellDiv.style.backgroundColor = (row + col) % 2 === 0 ? 'white' : 'black';
            rowDiv.appendChild(cellDiv);
        }
        chessBoard.appendChild(rowDiv);
    }
};

createChessBoard();

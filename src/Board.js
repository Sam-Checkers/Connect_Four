import React from 'react';
import './Board.css';

class Board extends React.Component {
  handleCellClick = (rowNumber) => {
    console.log('Clicked on row:', rowNumber, 'bottom column:', 5);
  }

  render() {
    const boardSize = 6;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(
          <div 
            key={`${i}-${j}`} 
            className="cell"
            onClick={() => this.handleCellClick(i)}
          ></div>
        );
      }
      board.push(
        <div 
          key={i} 
          className="row"
        >
          {row}
        </div>
      );
    }

    return (
      <div className="board">
        {board}
      </div>
    );
  }
}

export default Board;
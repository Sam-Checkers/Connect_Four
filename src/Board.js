import React from 'react';
import './Board.css';
import Piece from './Piece';

class Board extends React.Component {
  render() {
    const boardSize = 6;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(
          <div key={`${i}-${j}`} className="cell">
            <Piece /> {}
          </div>
        );
      }
      board.push(<div key={i} className="row">{row}</div>);
    }

    return (
      <div className="board">
        {board}
      </div>
    );
  }
}

export default Board;
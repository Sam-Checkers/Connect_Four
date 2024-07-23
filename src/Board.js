import React from 'react';
import './Board.css';
import Piece from './Piece';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceLocations: []
    };
  }

  handleCellClick = (rowNumber) => {
    const { pieceLocations } = this.state;
    const newLocation = { row: rowNumber, column: 5 };

    const isColumn5Occupied = pieceLocations.some(location => location.column === 5);

    if (isColumn5Occupied) {
      const newLocationColumn4 = { row: rowNumber, column: 4 };
      this.setState(prevState => ({
        pieceLocations: [...prevState.pieceLocations, newLocationColumn4]
      }));
    } else {
      this.setState(prevState => ({
        pieceLocations: [...prevState.pieceLocations, newLocation]
      }));
    }
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
          >
            {}
            {this.state.pieceLocations.map((location, index) => {
              if (location.row === i && location.column === j) {
                return <Piece key={index} />;
              }
              return null;
            })}
          </div>
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
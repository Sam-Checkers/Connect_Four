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
    let newLocation;

    if (!pieceLocations.some(location => location.row === rowNumber && location.column === 5)) {
      newLocation = { row: rowNumber, column: 5 };
    } else if (!pieceLocations.some(location => location.row === rowNumber && location.column === 4)) {
      newLocation = { row: rowNumber, column: 4 };
    } else if (!pieceLocations.some(location => location.row === rowNumber && location.column === 3)) {
      newLocation = { row: rowNumber, column: 3 };
    } else if (!pieceLocations.some(location => location.row === rowNumber && location.column === 2)) {
    newLocation = { row: rowNumber, column: 2 };
    } else if (!pieceLocations.some(location => location.row === rowNumber && location.column === 1)) {
    newLocation = { row: rowNumber, column: 1 };
    } else if (!pieceLocations.some(location => location.row === rowNumber && location.column === 0)) {
    newLocation = { row: rowNumber, column: 0 };
    }
    if (newLocation) {
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
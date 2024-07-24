import React from 'react';
import './Board.css';
import Piece from './Piece';
import ComputerPiece from './ComputerPiece';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceLocations: [],
      computerPieceLocations: []
    };
  }

  handleCellClick = (rowNumber, isComputerPiece) => {
    const { pieceLocations, computerPieceLocations } = this.state;
    let newLocation;

    for (let column = 5; column >= 0; column--) {
      if (!pieceLocations.some(location => location.row === rowNumber && location.column === column) &&
          !computerPieceLocations.some(location => location.row === rowNumber && location.column === column)) {
        newLocation = { row: rowNumber, column };
        break;
      }
    }

    if (newLocation) {
      if (isComputerPiece) {
        this.setState(prevState => ({
          computerPieceLocations: [...prevState.computerPieceLocations, newLocation]
        }));
      } else {
        this.setState(prevState => ({
          pieceLocations: [...prevState.pieceLocations, newLocation]
        }));
      }
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
            onClick={() => this.handleCellClick(i, false)}
          >
            {}
            {this.state.pieceLocations.map((location, index) => {
              if (location.row === i && location.column === j) {
                return <Piece key={index} />;
              }
              return null;
            })}
            {}
            {this.state.computerPieceLocations.map((location, index) => {
              if (location.row === i && location.column === j) {
                return <ComputerPiece key={index} />;
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
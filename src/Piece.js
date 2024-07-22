import React, { useState } from 'react';
import './Piece.css';

const Piece = () => {
  const [placed, setPlaced] = useState(false);

  const handleClick = () => {
    setPlaced(true);
  };

  return (
    <div className={`piece ${placed ? 'placed' : ''}`} onClick={handleClick}>
      {placed && <div className="piece-content"></div>}
    </div>
  );
};

export default Piece;

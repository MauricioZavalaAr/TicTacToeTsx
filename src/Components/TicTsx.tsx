// ///////////// ------------------
// import React from 'react';
// import Square from './Square';
// import calculateWinner from './calculateWinner';

// interface BoardProps {
//   xIsNext: boolean;
//   squares: Array<string | null>;
//   onPlay: (nextSquares: Array<string | null>) => void;
// }




// const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
//   function handleClick(i: number) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? 'X' : 'O';
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//         <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
//         <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
//         <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
//         <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
//         <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
//         <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
//       </div>
//     </>
//   );
// };

// export default Board;

////////////////////////////----------------------
///////////// ------------------
import React, { useState, useEffect } from 'react';
import Square from './Square';
import calculateWinner from './calculateWinner';

interface BoardProps {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const [isUserTurn, setIsUserTurn] = useState(true);

  useEffect(() => {
    if (!isUserTurn && !calculateWinner(squares)) {
      const delay = setTimeout(makeComputerMove, 500); // Wait a bit before AI move
      return () => clearTimeout(delay);
    }
  }, [isUserTurn, squares]);

  function makeComputerMove() {
    const emptySquares = squares.reduce((acc, square, index) => {
      if (!square) acc.push(index);
      return acc;
    }, [] as number[]);

    if (emptySquares.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const nextSquares = squares.slice();
    nextSquares[emptySquares[randomIndex]] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
    setIsUserTurn(true);
  }

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i] || !isUserTurn) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
    setIsUserTurn(false);
  }

  const winner = calculateWinner(squares);
  let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      </div>
      <div className="board-row">
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
        <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
        <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
      </div>
      <div className="board-row">
        <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
        <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
        <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
      </div>
    </>
  );
};

export default Board;



// //////////////////////---------------------------
// import React, { useState, useEffect } from 'react';
// import Square from './Square';
// import calculateWinner from './calculateWinner';
// import { AiFillCloseCircle, AiFillCircle } from 'react-icons/ai';

// interface BoardProps {
//   xIsNext: boolean;
//   squares: Array<string | null>;
//   onPlay: (nextSquares: Array<string | null>) => void;
// }

// const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
//   const [isUserTurn, setIsUserTurn] = useState(true);

//   useEffect(() => {
//     if (!isUserTurn && !calculateWinner(squares)) {
//       const delay = setTimeout(makeComputerMove, 500); // Wait a bit before AI move
//       return () => clearTimeout(delay);
//     }
//   }, [isUserTurn, squares]);

//   function makeComputerMove() {
//     const emptySquares = squares.reduce((acc, square, index) => {
//       if (!square) acc.push(index);
//       return acc;
//     }, [] as number[]);

//     if (emptySquares.length === 0) return;

//     const randomIndex = Math.floor(Math.random() * emptySquares.length);
//     const nextSquares = squares.slice();
//     nextSquares[emptySquares[randomIndex]] = xIsNext ? 'X' : 'O';
//     onPlay(nextSquares);
//     setIsUserTurn(true);
//   }

//   function handleClick(i: number) {
//     if (calculateWinner(squares) || squares[i] || !isUserTurn) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? 'X' : 'O';
//     onPlay(nextSquares);
//     setIsUserTurn(false);
//   }

//   const winner = calculateWinner(squares);
//   let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   const renderIcon = (value: string | null) => {
//     switch (value) {
//       case 'X':
//         return <AiFillCloseCircle size={32} />;
//       case 'O':
//         return <AiFillCircle size={32} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)}>
//           {renderIcon(squares[0])}
//         </Square>
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)}>
//           {renderIcon(squares[1])}
//         </Square>
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)}>
//           {renderIcon(squares[2])}
//         </Square>
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)}>
//           {renderIcon(squares[3])}
//         </Square>
//       </div>
//       <div className="board-row">
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)}>
//           {renderIcon(squares[4])}
//         </Square>
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)}>
//           {renderIcon(squares[5])}
//         </Square>
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)}>
//           {renderIcon(squares[6])}
//         </Square>
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)}>
//           {renderIcon(squares[7])}
//         </Square>
//       </div>
//       <div className="board-row">
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)}>
//           {renderIcon(squares[8])}
//         </Square>
//         <Square value={squares[9]} onSquareClick={() => handleClick(9)}>
//           {renderIcon(squares[9])}
//         </Square>
//         <Square value={squares[10]} onSquareClick={() => handleClick(10)}>
//           {renderIcon(squares[10])}
//         </Square>
//         <Square value={squares[11]} onSquareClick={() => handleClick(11)}>
//           {renderIcon(squares[11])}
//         </Square>
//       </div>
//       <div className="board-row">
//         <Square value={squares[12]} onSquareClick={() => handleClick(12)}>
//           {renderIcon(squares[12])}
//         </Square>
//         <Square value={squares[13]} onSquareClick={() => handleClick(13)}>
//           {renderIcon(squares[13])}
//         </Square>
//         <Square value={squares[14]} onSquareClick={() => handleClick(14)}>
//           {renderIcon(squares[14])}
//         </Square>
//         <Square value={squares[15]} onSquareClick={() => handleClick(15)}>
//           {renderIcon(squares[15])}
//         </Square>
//       </div>
//     </>
//   );
// };

// export default Board;
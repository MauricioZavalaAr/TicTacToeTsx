
function calculateWinner(squares: Array<string | null>) {
    const lines = [
      // Horizontal lines
      [0, 1, 2],
      [1, 2, 3],
      [4, 5, 6],
      [5, 6, 7],
      [8, 9, 10],
      [9, 10, 11],
      [12, 13, 14],
      [13, 14, 15],
  
      // Vertical lines
      [0, 4, 8],
      [1, 5, 9],
      [2, 6, 10],
      [3, 7, 11],
      [4, 8, 12],
      [5, 9, 13],
      [6, 10, 14],
      [7, 11, 15],
  
      // Diagonal lines
    [0, 5, 10],
    [1, 6, 11],
    [4, 9, 14],
    [3, 6, 9],
    [2, 5, 8],
    [7, 10, 13],
    [6, 9, 12],
    [11, 14, 15],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export default calculateWinner;

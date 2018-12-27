/*
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
function createChessBoard(size) {
  let chessBoard = '';
  let isHash = false;
  for (let i = 1; i < size * size; i++) {
    isHash ? (chessBoard += '#') : (chessBoard += ' ');
    isHash = !isHash;
    if (i % size === 0) {
      chessBoard += '\n';
      isHash = !isHash;
    }
  }
  console.log(chessBoard);
}
createChessBoard(8);

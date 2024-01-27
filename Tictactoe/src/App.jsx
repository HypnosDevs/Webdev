import { useState } from 'react'

import { WINNING_COMBINATIONS } from './WINNING_COMBINATION.js';

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';



const INIT_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const INIT_PLAYERS = {
  X: 'P1',
  O: 'P2'
};


const handlePlayer = (log) => {
  let curPlayer = 'X'

  if (log.length > 0 && log[0].player === 'X') {
    curPlayer = 'O';
  }
  return curPlayer;
}

const getBoard = (log) => {
  let board = [...INIT_BOARD.map(ele => [...ele])];
  for (let ele of log) {
    let { block, player } = ele;
    let { row, col } = block;

    board[row][col] = player;

  }
  return board;
}

const getWinner = (board, pName) => {

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {

    const first = board[combination[0].row][combination[0].col];
    const second = board[combination[1].row][combination[1].col];
    const third = board[combination[2].row][combination[2].col];

    if (first && ((first === second) && (first === third))) {
      winner = pName[first];
      break;
    }

  }
  return winner;
}

function App() {
  const [pName, setPname] = useState(INIT_PLAYERS);
  const [log, setLog] = useState([]);
  const activePlayer = handlePlayer(log);


  const handleNameChanged = (symbol, playerName) => {
    setPname((prev) => {
      return {
        ...prev,
        [symbol]: playerName
      };
    })
  }

  const resetBoard = () => {
    //console.log('reset');
    setLog([]);
  }

  const board = getBoard(log);
  const winner = getWinner(board, pName);

  let isDraw = (log.length === 9 && !winner);


  const handleBlock = (rowIdx, colIdx) => {

    setLog((prev) => {
      let updateTurn = [
        {
          block: { row: rowIdx, col: colIdx },
          player: activePlayer,
          name: pName[activePlayer],
          turn: prev.length + 1
        },
        ...prev
      ];

      return updateTurn;

    });
  }




  return <main>
    <div id="game-container">
      <ol className="highlight-player" id="players">
        <Player name={INIT_PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} handleName={handleNameChanged} />
        <h1>Round {log.length + 1}</h1>
        <Player name={INIT_PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} handleName={handleNameChanged} />
      </ol>
      {(winner || isDraw) && <GameOver winner={winner} resetBoard={resetBoard} />}
      <GameBoard board={board} handleBlock={handleBlock} />
    </div>
    <Log logs={log} />
  </main>
}

export default App

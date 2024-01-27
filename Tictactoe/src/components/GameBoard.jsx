

export default function GameBoard({ board, handleBlock }) {

    return <ol id="game-board">
        {
            board.map((row, rowIdx) =>
                <li key={rowIdx}>
                    <ol>
                        {row.map((symbol, colIdx) =>
                            <li key={colIdx}>
                                <button disabled={symbol === null ? false : true} onClick={() => handleBlock(rowIdx, colIdx)}>{symbol}</button>
                            </li>)}
                    </ol>
                </li>)
        }
    </ol>
}
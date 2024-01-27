import { useState } from 'react'

export default function Log({ logs }) {
    return (
        <ol id='log'>
            {logs.map((log) => <li key={`${log.block.col}${log.block.row}`}>Turn {log.turn},{log.name} ticked on row {log.block.row} col {log.block.col}</li>)}
        </ol>
    )
}

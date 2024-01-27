import { useState } from 'react';


export default function Player({ name, symbol, isActive, handleName }) {
    const [isEdit, setisEdit] = useState(false);
    const [pName, setpName] = useState(name);

    const toggleEdit = () => {
        setisEdit((isEdit) => !isEdit);
        if (isEdit) {
            console.log('editting');
            handleName(symbol, pName);
        }

    }

    const saveEdit = (evt) => {
        setpName(evt.target.value);
    }

    let displayplayerName = <span className="player-name">{pName}</span>;

    if (isEdit) {
        displayplayerName = <input type="text" value={pName} onChange={saveEdit} required />
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {displayplayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleEdit}>{isEdit ? "Save" : "Edit"}</button>
        </li>
    )
}
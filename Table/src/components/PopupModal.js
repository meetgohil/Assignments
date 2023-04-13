import React, { useId, useState } from "react";
import "../App.css"

const editRow = (event, entries, setEntries, currentState, rowStatus, closePopup) => {
    event.preventDefault();

    if (rowStatus === 'newRow')
        setEntries([...entries, currentState])
    else {
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].id === currentState.id)
                entries[i] = currentState
        }
        setEntries([...entries])
    }
    console.log(entries)
    closePopup();
}

const generateId = (rowStatus, initialState, uniqueId) => {
    if (rowStatus === 'newRow')
        return uniqueId;
    else
        return initialState.id;
}

function PopupModal(props) {

    const { entries, setEntries, initialState, rowStatus, closePopup } = props;

    const uniqueId = useId();

    const [currentState, setCurrentState] = useState({
        ...initialState,
        id: generateId(rowStatus, initialState, uniqueId)
    });
    return (
        <div className="modal">
            <div className="modal-content">
                    
                <form onSubmit={(event) => editRow(event, entries, setEntries, currentState, rowStatus, closePopup)} >
                <label>
                    Name:
                    <input
                        value={currentState.name}
                        onChange={(event) => setCurrentState({ ...currentState, name: event.target.value })}
                        type='text'
                        id='name' required/>
                </label>
                <label>
                    Phone Number:
                    <input
                        value={currentState.phonenumber}
                        onChange={(event) => setCurrentState({ ...currentState, phonenumber: event.target.value })}
                        type='tel'
                        id='phoneNumber' 
                        pattern='[0-9]{10}' required/>
                </label>
                <label>
                    Email-id:
                    <input
                        value={currentState.email}
                        onChange={(event) => setCurrentState({ ...currentState, email: event.target.value })}
                        type='email'
                        id='email-id' required/>
                </label>
                <label>
                    Address:
                    <textarea
                        value={currentState.address}
                        onChange={(event) => setCurrentState({ ...currentState, address: event.target.value })}
                        type='text'
                        id='address' required/>
                </label>
                <button
                    className="modal-save-btn"
                    type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default PopupModal;
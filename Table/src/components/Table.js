import React, { useState } from 'react';
import '../App.css'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import PopupModal from './PopupModal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Table(props) {

    const { entries, setEntries } = props;

    const [popupData, setPopupData] = useState({
        data: null
    });

    const openPopUp = (obj) => {
        setPopupData({
            data: obj
        })
    }

    const DeleteRow = (setEntries, obj) => {
        setEntries((current) =>
            current.filter((row) => row.id !== obj.id)
        );
    }

    return (
        <div className='table-main'>
            <table>
                <thead className='table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email-id</th>
                        <th className='address'>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {
                        entries && entries.map(obj =>
                            <tr key={obj.id} className='table-content'>
                                <td>{obj.name}</td>
                                <td>{obj.phonenumber}</td>
                                <td>{obj.email}</td>
                                <td>{obj.address}</td>
                                <td className='action-icons'>
                                    <Popup contentStyle={{ width: "40%" }}
                                        trigger={<div><FiEdit className='edit-icon' onClick={() => openPopUp(obj)}/></div>}
                                        modal>
                                        {
                                            close => (
                                                <div >
                                                    {
                                                         <PopupModal
                                                            entries={entries}
                                                            setEntries={setEntries}
                                                            initialState={popupData.data}
                                                            rowStatus={"editRow"}
                                                            closePopup={close} />
                                                    }
                                                </div>
                                            )
                                        }
                                    </Popup>
                                    <MdDelete className='delete-icon' onClick={() => DeleteRow(setEntries, obj)} />
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
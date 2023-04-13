import { useState } from "react";
import Table from "./components/Table";
import PopupModal from "./components/PopupModal";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const initialState = {
  name: "",
  phonenumber: "",
  email: "",
  address: ""
}

function App() {

  const [entries, setEntries] = useState([]);

  return (
    <div className="App" >
      <div>
        <Popup
          contentStyle={{ width: "40%" }}
          trigger={<button className="add-btn">ADD</button>}
          modal 
          >
          {
            close => (
              <PopupModal
                entries={entries}
                setEntries={setEntries}
                currentState={initialState}
                rowStatus={"newRow"}
                closePopup={close} />
            )
          }
        </Popup>
      </div>
      <Table entries={entries} setEntries={setEntries} />
    </div>
  );
}

export default App;

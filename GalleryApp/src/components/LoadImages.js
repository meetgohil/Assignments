import { React } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function LoadImages(props) {
    const {content} = props;
    return (
        <div className='images scroll'>
            {
              content.map(obj => {
                return (
                  <Popup 
                    trigger={obj.type.substr(0,5) === "image" ? <img key={obj.url} className="image" src={obj.url} alt=""/> : ""}
                    modal>
                    {
                      close => (
                        <>
                        <img key={obj.url} className="popup-image" src={obj.url} alt=""/>
                        <button className="popup-btn" onClick={() => close()}>
                          Close
                        </button>
                        </>
                      )
                      
                    }
                  </Popup>
                )
              })
            }
        </div>
    )
}

export default LoadImages;
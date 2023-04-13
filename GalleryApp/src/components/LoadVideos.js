import { React } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function LoadVideos(props) {
    const {content} = props;
    return (
        <div className='videos scroll'>
          {
            content.map(obj => {
              return (
                <Popup 
                    trigger={obj.type.substr(0,5) === "video" ? 
                    <video className="video" key={obj.url} controls >
                    <source src={obj.url} alt=""/>
                    </video>: ""} 
                    modal>
                {
                  close => (
                    <div className="popup-video">
                      <video className="popup-video-content" key={obj.url} controls >
                        <source src={obj.url} alt=""/>
                      </video>

                      <button className="popup-btn" onClick={() => close()}>
                            Close
                      </button>
                    </div>
                  )
                }
                </Popup>
              )
            })
          }
        </div>
    )
}


export default LoadVideos;
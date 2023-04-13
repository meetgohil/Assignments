import React from "react"
import './App.css'
import { useState } from "react";
import LoadImages from "./components/LoadImages";
import LoadVideos from "./components/LoadVideos";

const uploadContent = (event, content, setContent) => {
  event.preventDefault(); 

  for(let i=0;i<event.target.files.length;i++) {
    const newObj = {
      url: URL.createObjectURL(event.target.files[i]),
      type: event.target.files[i].type
    }
    content.push(newObj)
  }
  setContent([...content])  
  console.log(event.target.files);
}

function App() {
  const [content, setContent] = useState([]);

  return (
    <div className="App">
      <h2 className="gallary-name">My Gallery</h2>
      
      <h2 className="image-section">Images</h2>
      <LoadImages content={content} />
      <h2 className="video-section">Videos</h2>
      <LoadVideos content={content} />

      <form className="main">
        <input id="image" type="file" multiple onChange={(event) => uploadContent(event, content, setContent)} hidden/>
        <label className="upload-btn" for="image">Upload</label>
      </form>
    </div>
  )
}

export default App;

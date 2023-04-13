import React from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h2>This is FirstPage</h2>
            <button onClick={() => navigate('../secondpage')}>Second Page</button>
        </div>
    )
}

export default FirstPage;

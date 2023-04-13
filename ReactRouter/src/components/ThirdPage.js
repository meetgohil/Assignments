import React from "react";
import { useNavigate } from "react-router-dom";

const ThirdPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h2>This is ThirdPage</h2>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate('/')}>First Page</button>
        </div>
    )
}

export default ThirdPage;

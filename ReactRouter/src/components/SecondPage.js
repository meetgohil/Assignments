import React from "react";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h2>This is SecondPage</h2>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate('../thirdpage')}>Third Page</button>
        </div>
    )
}

export default SecondPage;

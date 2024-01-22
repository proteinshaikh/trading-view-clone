import React, { useState } from "react";

function MyButton(){
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };
    
    return (
        <div>
            <button onClick={toggleContent}>
            click me!
        </button>
    {showContent && (
        <div>
            <p>made by zeeshan :)</p>
        </div>
    )}
        </div>       
    );
}

export default MyButton;
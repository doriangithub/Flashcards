import React from "react";
import "./LongButton.css";

export const LongButton = ({textBtn}) => {
    return (
        <div className="long__button">
            <div className="btn__text">{textBtn}</div>    
        </div>       
    );
}
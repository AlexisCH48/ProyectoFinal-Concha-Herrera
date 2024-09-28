import React from "react";
import './ButtonNav.css'

const Button = ({label, onClick}) => {
    return(
        <button className="buttonStyle" onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
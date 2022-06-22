import React from "react";
import buttonStyle  from './button.module.css';
export const Button = ({
    text,
    extraClass = '',
    type = 'button',
     ...rest}) => {
    return (
        <button className = {`${buttonStyle.default} ${extraClass}`}
        {...rest}>
            {text}
        </button>
    )
}
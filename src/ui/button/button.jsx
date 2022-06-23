import React from "react";
import buttonStyle  from './button.module.css';
export const Button = ({
    text = '',
    extraClass = '',
    type = 'button',
     ...rest}) => {
    return (
        <>
        <button className = {`${extraClass} ${buttonStyle.default}`}
        {...rest}>
            {text}
        </button>
        </>
    )
}
export default Button
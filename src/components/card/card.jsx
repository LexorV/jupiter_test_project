import React from 'react';
import cardStyle from './card.module.css';


export const Card = ({name, category, url}) => {
    return(
        <li className={cardStyle.main}>
            <img className={cardStyle.picture} 
            src={url} alt="test" />
            <div>{category}</div>
            <p className={cardStyle.name}>{name}</p>
        </li>
    )
}
export default Card
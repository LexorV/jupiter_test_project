import React, { useState, useEffect } from 'react';
import cardStyle from './card.module.css';


export const Card = ({ name,
    category,
    url,
    localTestData,
    setCardList,
    indexCard,
    setPrimaryArrCards,
    filterCards
}) => {
    const [isActive, setIsActive] = useState(false);

    const activeCard = (e) => {
        e.stopPropagation();
        setIsActive(!isActive)
    }
    const deleteCard = () => {
        const newArr = [...localTestData];
        newArr.splice(indexCard, 1);
        setPrimaryArrCards(newArr)
        setCardList(newArr)
    }
    useEffect(() => {
        if (isActive) {
            const handleDelete = (e) => {
                e.preventDefault()
                e.keyCode === 46 && deleteCard();
                setIsActive(false)
            }
            document.addEventListener('keydown', handleDelete);
            return () => {
                document.removeEventListener('keydown', handleDelete);
            }
        }
    }, [isActive, localTestData]);
    const filterCardHandle = (e) => {
        e.stopPropagation();
        filterCards(category);
    }
    return (
        <li onClick={activeCard} className={`${cardStyle.main}
        ${isActive ? cardStyle.active : ''}`}>
            <img className={cardStyle.picture}
                src={url} alt="test" />
            <p onClick = {filterCardHandle} className={cardStyle.category}>{category}</p>
            <p className={cardStyle.name}>{name}</p>
        </li>
    )
}
export default Card
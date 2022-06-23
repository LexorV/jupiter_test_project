import React, {
    useEffect,
    useState
} from 'react';
import { testData } from '../helper/data';
import mainStyle from './main.module.css';
import {Card} from '../components/card/card';
import {Button} from '../ui/button/button';
export const Main = () => {
    const [primaryArrCards, setPrimaryArrCards] = useState(testData)
    const [cardsList, setCardList] = useState(testData);
    const [activeList, setActiveList] = useState('ShowAll');
    const [amtCard, setAmtCard] = useState(6);
    const filterCards = (category) => {
     const filt =  primaryArrCards.filter(card => card.category == category);
     setCardList(filt)
    }
    const handleShowAll = () => {
        setActiveList('ShowAll');
        setCardList(primaryArrCards)
    }
    const handleDesign = () => {
        setActiveList('Design');
        filterCards('Design')
    }
    const handleBranding = () => {
        setActiveList('Branding')
        filterCards('Branding')
    }
    const handleIllustration = () => {
        setActiveList('Illustration')
        filterCards('Illustration')
    }
    const handleMotion = () => {
        setActiveList('Motion')
        filterCards('Motion')
    }
    const moreCards = () => {
        setAmtCard(amtCard + 6)
    }

    return (
        <main className= {mainStyle.cover}>
        <div className={mainStyle.main}>
            <ul className={mainStyle.lists_tab}>
                <li onClick={handleShowAll}
                    className={`${activeList === 'ShowAll' ?
                        mainStyle.list_active : ''}
                ${mainStyle.list}`}>Show All</li>
                <li onClick={handleDesign}
                    className={`${activeList === 'Design' ?
                        mainStyle.list_active : ''}
                        ${mainStyle.list}`}>Design</li>
                <li onClick={handleBranding}
                    className={`${activeList === 'Branding' ?
                        mainStyle.list_active : ''}
                        ${mainStyle.list}`}>Branding</li>
                <li onClick={handleIllustration}
                    className={`${activeList === 'Illustration' ?
                        mainStyle.list_active : ''}
                        ${mainStyle.list}`}>Illustration</li>
                <li onClick={handleMotion}
                    className={`${activeList === 'Motion' ?
                        mainStyle.list_active : ''}
                    ${mainStyle.list}`}>Motion</li>
            </ul>
            <ul className={mainStyle.lists_cards}>
                { cardsList.slice(0, amtCard).map((card, index) => (
                    <Card key={card.id} name={card.name}
                    category={card.category}
                    url={card.url}
                    localTestData = {primaryArrCards}
                    setCardList = {setCardList}
                    indexCard= {index}
                    setPrimaryArrCards = {setPrimaryArrCards}
                    filterCards = {filterCards}
                    />
                )) }
            </ul>
            <Button text={'Load More'} onClick={moreCards}  />
        </div>
        </main>
    );
};
export default Main;
import React, {
    useEffect,
    useState
} from 'react';
import { testData } from '../helper/data';
import mainStyle from './main.module.css';
export const Main = () => {
    const [cardsList, setCardList] = useState(testData);
    const [activeList, setActiveList] = useState('ShowAll');
    const handleShowAll = () => {
        setActiveList('ShowAll')
    }
    const handleDesign = () => {
        setActiveList('Design')
    }
    const handleBranding = () => {
        setActiveList('Branding')
    }
    const handleIllustration = () => {
        setActiveList('Illustration')
    }
    const handleMotion = () => {
        setActiveList('Motion')
    }
    return (
        <main className={mainStyle.main}>
            <ul className={mainStyle.lists}>
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
        </main>
    );
};
export default Main;
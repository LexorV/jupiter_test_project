import React, {
} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/header/logo.svg';
import headerStyle from './header.module.css';
import Button from '../../ui/button/button'
export const Header = () => {
    return (
        <header className={headerStyle.cover}>
        <div className={headerStyle.main}>
            <div className={headerStyle.box_top}>
                <Link to='/'><img src={logo} /></Link>
                <nav className={headerStyle.menu_nav}>
                    <ul className={headerStyle.menu_lists} >
                        <li className={headerStyle.menu_list}>
                            About
                        </li>
                        <li className={headerStyle.menu_list}>
                            Services
                        </li>
                        <li className={headerStyle.menu_list}>
                            Pricing
                        </li>
                        <li className={headerStyle.menu_list}>
                            Blog
                        </li>
                    </ul>
                </nav>
                <Button extraClass={headerStyle.button} text={"contact".toUpperCase()} />
            </div>
            <h1 className={headerStyle.heading}>Portfolio</h1>
            <p className={headerStyle.text}>Agency provides a full service range including technical skills, design, business understanding.</p>
        </div>
        </header>
    )
}
export default Header
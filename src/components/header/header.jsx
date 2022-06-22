import React, {

  } from 'react';
  import logo from '../../assets/images/header/logo.svg'
  import headerStyle from './header.module.css'
export const Header = () => {
    return (
        <header className={headerStyle.main}>
            <div className={headerStyle.box_top}>
                <img src={logo} />
                <nav className={headerStyle.menu_nav}>
                    <ul className={headerStyle.menu_lists} >
                        <li className= {headerStyle.menu_list}>
                        About
                        </li>
                        <li className= {headerStyle.menu_list}>
                        Services
                        </li>
                        <li className= {headerStyle.menu_list}>
                        Pricing
                        </li>
                        <li className= {headerStyle.menu_list}>
                        Blog
                        </li>
                    </ul>
                </nav>


            </div>
            <p>test</p>
        </header>
    )
}
export default Header
import React from "react";
import logo from '../../assets/your_quotes.png'
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'
export default function MainNavigation(){

    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="Your Quotes" height="75" width="75"/>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" activeClassName={classes.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-quote" activeClassName={classes.active}>
                            Add Quote
                        </NavLink>
                    </li>
    
                </ul>
            </nav>
        </header>
    )
}
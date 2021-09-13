import { NavLink } from "react-router-dom"

import classes from './css/MainNavigation.module.css'

const MainHeader = () => {

    return (
        <div className={classes.MainHeader}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <NavLink to='/GreatQuotes' activeClassName={classes.active}>GreatQuotes</NavLink>
                    </li>

                    <li className={classes.li}>
                        <NavLink to='/AddQuote' activeClassName={classes.active}>AddQuote</NavLink>
                    </li>
                </ul>                
            </nav>
        </div>
    )
}

export default MainHeader
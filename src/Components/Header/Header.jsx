import React from "react";
import styles from "./Header.module.scss";
import basket from "../../Assets/shopping-bag.png"
import favorite from "../../Assets/love.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { listMenuSelector } from "../../slices/main";

const Header = () => {
    const items = useSelector(listMenuSelector);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
               <NavLink to={"/"} className={styles.logo}><h1>Logo</h1></NavLink> 
                <div className={styles.menu}>
                    <NavLink to={"/"} className={styles.img}>
                        <img src={basket} alt="basket"></img>
                        <div className={styles.counter}>{items.filter((item) => item.favorite === false).length}</div>
                    </NavLink>
                    <NavLink to={"/favorite"} className={styles.img}>
                        <img src={favorite} alt="basket"></img>
                        <div className={styles.counter}>{items.filter((item) => item.favorite === true).length}</div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
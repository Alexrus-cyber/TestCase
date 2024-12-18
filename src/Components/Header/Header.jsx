import React from "react";
import styles from "./Header.module.scss";
import basket from "../../Assets/shopping-bag.png"
import menu from "../../Assets/love.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    const count = 3
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>Logo</h1>
                <div className={styles.menu}>
                    <NavLink to={"/"} className={styles.img}>
                        <img src={basket} alt="basket"></img>
                        <div className={styles.counter}>{count}</div>
                    </NavLink>
                    <NavLink to={"/"} className={styles.img}>
                        <img src={menu} alt="basket"></img>
                        <div className={styles.counter}>{count}</div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
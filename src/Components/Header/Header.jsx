import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import basket from "../../Assets/shopping-bag.png"
import favorite from "../../Assets/love.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { listMenuSelector } from "../../slices/main";
import { ShoppingCart, Star } from "lucide-react";

const Header = () => {
    const items = useSelector(listMenuSelector);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
               <NavLink to={"/"} className={styles.logo}><h1>Logo</h1></NavLink> 
                <div className={styles.menu}>
                    <NavLink to={"/basket"} className={styles.img}>
                        <ShoppingCart strokeWidth={1} className={styles.icon} color="#fff" size={32}/>
                        <div className={styles.counter}>{items.filter((item) => item.basket === true).length}</div>
                    </NavLink>
                    <NavLink to={"/favorite"} className={styles.img}>
                        <Star className={styles.icon} color="#fff"  size={32} strokeWidth={1} background= "red"/>
                        <div className={styles.counter}>{items.filter((item) => item.favorite === true).length}</div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
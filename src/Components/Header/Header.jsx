import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { basketSelector } from "../../slices/basket";
import { favoriteSelector } from "../../slices/favorite";
import { ShoppingCart, Star } from "lucide-react";

const Header = () => {
    const itemsFavorite = useSelector(favoriteSelector);
    const itemsBasket = useSelector(basketSelector);
    const {isLoading} = useSelector((state) => state.menu);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
               <NavLink to={"/"} className={styles.logo}><h1>Logo</h1></NavLink> 
                <div className={styles.menu}>
                    <NavLink to={"/basket"} className={styles.img}>
                        <ShoppingCart strokeWidth={1} className={styles.icon} color="#fff" size={32}/>
                        <div className={styles.counter}>{isLoading ? "0" : itemsBasket.filter((item) => item.basket === true).length}</div>
                    </NavLink>
                    <NavLink to={"/favorite"} className={styles.img}>
                        <Star className={styles.icon} color="#fff"  size={32} strokeWidth={1} background= "red"/>
                        <div className={styles.counter}>{isLoading ? "0" : itemsFavorite.filter((item) => item.favorite === true).length}</div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
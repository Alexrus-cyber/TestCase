import React, { useCallback } from "react";
import styles from "./Cart.module.scss";
import { useDispatch } from "react-redux";
import { editMenu } from "../../../slices/main";
import basket from "../../../Assets/shopping-bag.png"

const Cart = ({favorite,available, id, labels, name, preview_picture, price, price_discount, quantity, reviews}) => {
    const dispatch = useDispatch();
    const EditMenu = useCallback((favorite, id, labels, name, preview_picture, price, price_discount, quantity, reviews, available) =>
        dispatch(editMenu({favorite, id, labels, name, preview_picture, price, price_discount, quantity, reviews, available}))
    , [dispatch]);
    return (
        <div className={styles.cart}>
            <div className={styles.content}>
                <p>Количество: {quantity}</p>
                <img className={styles.img} src={preview_picture} alt="cart"></img>
                <h2 className={styles.title}>{name.length ? name.substring(0, 20) + " ..." : name }</h2>
                <p>{labels.discount === "Есть скидка" ? <s>{price}₽</s> : <p>{price}</p>} {labels.discount === "Есть скидка" ? price_discount + "₽" : ""}</p>
                <p>Рейтинг: {reviews}</p>
                {quantity > 0 ? 
                <div className={styles.buttons}>
                    <button disabled={favorite === true} className={favorite === true ? styles.inactive : styles.button} onClick={() => 
                    EditMenu(favorite = true, id, labels, name, preview_picture, price, price_discount, quantity, reviews, available)}>
                      {favorite === true ? "В избранном" : "В избранное"}
                    </button> 
                    <button disabled={favorite === true} className={favorite === true ? styles.inactiveIcon : styles.icon}><img style={{width: "20px", height: "20px"}} src={basket} alt="cart"></img></button>
                </div> 
                : 
                <div className={styles.buttons}> <button className={styles.active} disabled>Отсутствует</button></div>
                }
            </div>   
        </div>
    )
};

export default Cart;
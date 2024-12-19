import React, { useCallback } from "react";
import styles from "./Cart.module.scss";
import { useDispatch } from "react-redux";
import { editFavorite, editBasket } from "../../../slices/main";
import basketPng from "../../../Assets/shopping-bag.png"

const Cart = ({favorite,id,basket, ...props}) => {
    const dispatch = useDispatch();
    const EditFavorite = useCallback((favorite,id,basket, {...props}) =>
        dispatch(editFavorite({favorite,id,basket, ...props}))
    , [dispatch]);
    const EditBasket = useCallback((favorite, id, basket, {...props}) => 
        dispatch(editBasket({favorite, id, basket , ...props}))
    ,[dispatch]);
    return (
        <div className={styles.cart}>
            <div className={styles.content}>
                <p>Количество: {props.quantity}</p>
                <img className={styles.img} src={props.preview_picture} alt="cart"></img>
                <h2 className={styles.title}>{props.name.length ? props.name.substring(0, 20) + " ..." : props.name }</h2>
                <p>{props.labels.discount === "Есть скидка" ? <s>{props.price}₽</s> : <p>{props.price}</p>} {props.labels.discount === "Есть скидка" ? props.price_discount + "₽" : ""}</p>
                <p>Рейтинг: {props.reviews}</p>
                {props.quantity > 0 ? 
                <div className={styles.buttons}>
                    <button disabled={favorite === true} className={favorite === true ? styles.inactive : styles.button} onClick={() => 
                    EditFavorite(true,id,basket, {...props})}>
                      {favorite === true ? "В избранном" : "В избранное"}
                    </button> 
                    <button disabled={basket === true} onClick={() => EditBasket(favorite, id, true, {...props})} className={basket === true ? styles.inactiveIcon : styles.icon}><img style={{width: "20px", height: "20px"}} src={basketPng} alt="cart"></img></button>
                </div> 
                : 
                <div className={styles.buttons}> <button className={styles.active} disabled>Отсутствует</button></div>
                }
            </div>   
        </div>
    )
};

export default Cart;
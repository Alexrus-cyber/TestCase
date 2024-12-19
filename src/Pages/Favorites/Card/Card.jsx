import React from "react";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { editBasket, editFavorite } from "../../../slices/main";
import { useCallback } from "react";

const Card = ({favorite,id,basket, ...props}) => {
    const f = false;
    const t = true;
    const dispatch = useDispatch();
    const EditFavorite = useCallback((favorite, id, basket, {...props}) => 
        dispatch(editFavorite({favorite, id,basket, ...props }))
    , [dispatch]);

    const EditBasket = useCallback((favorite, id, basket, {...props}) => 
        dispatch(editBasket({favorite, id, basket , ...props}))
    , [dispatch]);

    return (
        <div className={styles.cart}>
            <div className={styles.content}>
                <div className={styles.count}>
                    <p>Количество товара: {props.quantity}</p>
                    <img className={styles.img} src={props.preview_picture} alt="cart"></img>
                    <button disabled={basket === true} className={basket === true ? styles.inactive : styles.button} onClick={() => 
                    EditBasket(favorite, id, t, {...props})}>
                        {basket === true ? "В корзине" : "В корзину"}
                    </button> 
                </div>
                <div className={styles.rating}>
                    <h2 className={styles.title}>{props.name}</h2>
                    <p className={styles.text}>{props.labels.discount === "Есть скидка" ? <s className={styles.text}>{props.price}₽</s> : <p>{props.price}</p>} {props.labels.discount === "Есть скидка" ? props.price_discount + "₽" : ""}</p>
                    <p className={styles.text}>Рейтинг: {props.reviews}</p>
                </div>
                <button onClick={() => 
                    EditFavorite(f, id, basket, {...props})}>Удалить</button>
            </div>   
        </div>
    )
};

export default Card
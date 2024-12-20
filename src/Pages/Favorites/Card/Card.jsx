import React from "react";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { editBasket, editFavorite } from "../../../slices/main";
import { useCallback } from "react";
import { CircleX, Star } from "lucide-react";

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
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.count}>
                    <img className={styles.img} src={props.preview_picture} alt="cart"></img>
                    <button disabled={basket === true} className={basket === true ? styles.inactive : styles.button} onClick={() => 
                    EditBasket(favorite, id, t, {...props})}>
                        {basket === true ? "В корзине" : "В корзину"}
                    </button> 
                </div>
                <div className={styles.rating}>
                    <div className={styles.title}>
                        <h2 className={styles.title}>{props.name}</h2>
                        <p>{props.quantity !== 0 ? "В наличии": "Отсутствует"}</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p className={props.labels.discount === "Есть скидка" ? styles.discount : styles.text}>Цена: {props.labels.discount === "Есть скидка" ? <s className={styles.text}>{props.price}₽</s> : <p>{props.price}</p>} {props.labels.discount === "Есть скидка" ? props.price_discount + "₽" : ""}</p>
                        <p className={styles.text}>Отзывов: {props.reviews}</p>
                    </div>
                </div>
                <button className={styles.buttonCancel} onClick={() => 
                    EditFavorite(f, id, basket, {...props})}><CircleX className={styles.buttonCancel}></CircleX></button>
            </div>   
        </div>
    )
};

export default Card
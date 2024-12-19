import React from "react";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { editMenu } from "../../../slices/main";
import { useCallback } from "react";

const Card = ({favorite, available, id, labels, name, preview_picture, price, price_discount, quantity, reviews}) => {
    const count = false;
    const dispatch = useDispatch();
    const EditMenu = useCallback((favorite, id, labels, name, preview_picture, price, price_discount, quantity, reviews, available) => 
        dispatch(editMenu({favorite, id, labels, name, preview_picture, price, price_discount, quantity, reviews, available}))
    , [dispatch]);

    return (
        <div className={styles.cart}>
            <div className={styles.content}>
                <div className={styles.count}>
                    <p>Количество товара: {quantity}</p>
                    <img className={styles.img} src={preview_picture} alt="cart"></img>
                    <button onClick={() => 
                    EditMenu(favorite, id, labels, name, preview_picture, price, price_discount, quantity, reviews, available)}>
                        В корзину
                    </button> 
                </div>
                <div className={styles.rating}>
                    <h2 className={styles.title}>{name}</h2>
                    <p className={styles.text}>{labels.discount === "Есть скидка" ? <s className={styles.text}>{price}₽</s> : <p>{price}</p>} {labels.discount === "Есть скидка" ? price_discount + "₽" : ""}</p>
                    <p className={styles.text}>Рейтинг: {reviews}</p>
                </div>
                <button onClick={() => 
                    EditMenu(count, id, labels, name, preview_picture, price, price_discount, quantity, reviews, available)}>Удалить</button>
                <div>
                    {available === true ? <button>Избранное</button> : ""}
                </div>
            </div>   
        </div>
    )
};

export default Card
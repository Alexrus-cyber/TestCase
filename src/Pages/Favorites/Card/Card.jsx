import React from "react";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { editBasket,editFavorite, deleteFavorite, basketSelector, favoriteSelector, deleteBasket } from "../../../slices/main";
import { useCallback } from "react";
import { CircleX } from "lucide-react";
import { useSelector } from "react-redux";

const Card = ({favorite,id, basket, custom, ...props}) => {
    const basketItems = useSelector(basketSelector);
    const favoriteItems = useSelector(favoriteSelector);

    const dispatch = useDispatch();

    const EditBasket = useCallback((id) => 
        dispatch(editBasket({id, ...props}))
    ,[dispatch]);
    const DeleteBasket = useCallback((id) => 
        dispatch(deleteBasket({id, ...props }))
    , [dispatch]);
    
    const DeleteFavorite = useCallback((id) => 
        dispatch(deleteFavorite({id, ...props }))
    , [dispatch]);

    const EditFavorite = useCallback((itemId) =>
        dispatch(editFavorite({itemId, ...props})) 
    , [dispatch]);


    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.count}>
                    <img className={styles.img} src={"https://ohotaktiv.ru/upload/resize_cache/iblock/188/200_200_1/xxyqz2jgqbnx6gsizpm83mfbj3tnf423.webp"} alt="cart"></img>
                    {custom ? 
                    <button disabled={basketItems.map((item) => item.id).includes(id) ? true : false} className={basketItems.map((item) => item.id).includes(id) ? styles.inactive : styles.button} onClick={() => 
                    EditBasket(id)}>
                        {basketItems.map((item) => item.id).includes(id) ? "В корзине" : "В корзину"}
                    </button> : 
                    <button disabled={favoriteItems.map((item) => item.id).includes(id) ? true : false} className={favoriteItems.map((item) => item.id).includes(id) ? styles.inactive : styles.button} onClick={() => 
                    EditFavorite(id)}>
                        {favoriteItems.map((item) => item.id).includes(id) ? "В избранном" : "В избранное"}
                    </button>}
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
                {custom ? 
                <button className={styles.buttonCancel} onClick={() => DeleteFavorite(id)}><CircleX className={styles.buttonCancel}></CircleX></button> 
                : 
                <button className={styles.buttonCancel} onClick={() => DeleteBasket(id)}><CircleX className={styles.buttonCancel}></CircleX></button> }
            </div>   
        </div>
    )
};

export default Card
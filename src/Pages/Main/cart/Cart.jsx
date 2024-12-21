import React, { use, useCallback } from "react";
import styles from "./Cart.module.scss";
import { useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { basketSelector, editBasket } from "../../../slices/basket";
import { favoriteSelector, editFavorite} from "../../../slices/favorite";

const Cart = ({favorite,id,basket, items, ...props}) => {
    const favoriteItems = useSelector(favoriteSelector);
    const basketItems = useSelector(basketSelector);

    const dispatch = useDispatch();
    const EditFavorite = useCallback((id) => {
        dispatch(editFavorite({id, ...props}))
    }     
    , [dispatch]);
     const EditBasket = useCallback((id) => {
            dispatch(editBasket({id, ...props}))
        }
        ,[dispatch]);
    return (
        <div className={styles.cart}>
            <div className={styles.content}>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <p>{props.quantity > 0 ? "В наличии": "Отсутствует"}</p>
                    <p>Отзывов: {props.reviews}</p>
                </div>
                <img className={styles.img} src={"https://ohotaktiv.ru/upload/resize_cache/iblock/188/200_200_1/xxyqz2jgqbnx6gsizpm83mfbj3tnf423.webp"} alt="cart"></img>
                <h2 className={styles.title}>{props.name.length ? props.name.substring(0, 20) + " ..." : props.name }</h2>
                <p>{props.labels.discount === "Есть скидка" ? <s>{props.price}₽</s> : <p>{props.price}</p>} {props.labels.discount === "Есть скидка" ? props.price_discount + "₽" : ""}</p>
                {props.quantity > 0 ? 
                <div className={styles.buttons}>
                    <button disabled={favoriteItems.map((item) => item.id).includes(id) ? true : false} className={favoriteItems.map((item) => item.id).includes(id) ? styles.inactive : styles.button} onClick={() => EditFavorite(id)}>
                      {favoriteItems.map((item) => item.id).includes(id) ? "В избранном" : "В избранное"}
                    </button> 
                    <button disabled={basketItems.map((item) => item.id).includes(id) ? true : false} onClick={() => EditBasket(id)} className={basketItems.map((item) => item.id).includes(id) ? styles.inactiveIcon : styles.icon}>{basketItems.map((item) => item.id).includes(id) ? "В корзине" :  <ShoppingCart color="#fff"/>}</button>
                </div> 
                : 
                <div className={styles.buttons}> <button className={styles.active} disabled>Отсутствует</button></div>
                }
            </div>   
        </div>
    )
};

export default Cart;
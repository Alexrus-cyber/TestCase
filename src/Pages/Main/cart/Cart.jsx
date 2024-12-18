import React from "react";
import styles from "./Cart.module.scss";

const Cart = ({available, id, labels, name, preview_picture, price, price_discount, quantity, reviews}) => {
    return (
        <div className={styles.cart}>
            <div className={styles.content}>
                <p>Количество: {quantity}</p>
                <img className={styles.img} src={preview_picture} alt="cart"></img>
                <h2 className={styles.title}>{name.length ? name.substring(0, 20) + " ..." : name }</h2>
                <p>{labels.discount === "Есть скидка" ? <s>{price}₽</s> : <p>{price}</p>} {labels.discount === "Есть скидка" ? price_discount + "₽" : ""}</p>
                <p>Рейтинг: {reviews}</p>
                <div>
                    <button>В корзину</button> 
                    <button>Избранное</button>
                </div>
            </div>   
        </div>
    )
};

export default Cart;
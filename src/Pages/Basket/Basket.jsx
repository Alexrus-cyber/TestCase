import React, { memo, useEffect } from "react";
import styles from "./Basket.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenu } from "../../slices/main";
import { basketSelector } from "../../slices/basket";
import Card from "../../Components/Card/Card";

const Basket = memo (() => {
    const items = useSelector(basketSelector);
    const { isLoading, itemsPerPage, currentPage } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenu())
    }, [dispatch])
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <section className={styles.favorite}>
            <div className={styles.container}>
            <h1 className={styles.title}>Корзина</h1>
                <div className={styles.subContainer}>
                {items.filter((item) => item.basket === true).length > 0 ? items.filter((item) => item.basket === true).map((item) => (
                        <Card custom = {false} key={item.id} {...item} />
                    )) : <h1>Вы ничего не добавили в корзину</h1>}
                </div>
            </div>
        </section>
    )
});

export default Basket
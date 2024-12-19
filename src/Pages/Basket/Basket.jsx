import React, { memo, useEffect } from "react";
import styles from "./Basket.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenu, listMenuSelector } from "../../slices/main";
import Card from "./Card/Card";

const Basket = memo (() => {
    const items = useSelector(listMenuSelector);
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
                        <Card itemsPerPage={itemsPerPage} currentPage={currentPage} key={item.id} {...item} />
                    )) : <h1>Вы ничего не добавили в корзину</h1>}
                </div>
            </div>
        </section>
    )
});

export default Basket
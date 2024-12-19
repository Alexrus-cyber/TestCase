import React, { useEffect } from "react";
import styles from "./Favorite.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenu, listMenuSelector } from "../../slices/main";
import Card from "./Card/Card";

const Favorite = () => {
    const items = useSelector(listMenuSelector);
    const { isLoading } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenu())
    }, [dispatch])
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    console.log(items);
    return (
        <section className={styles.favorite}>
            <div className={styles.container}>
            <h1 className={styles.title}>Избранное</h1>
                <div className={styles.subContainer}>
                {items.filter((item) => item.favorite === true).length > 0 ? items.filter((item) => item.favorite === true).map((item) => (
                        <Card key={item.id} {...item} />
                    )) : <h1>Вы ничего не добавили в избранное</h1>}
                </div>
            </div>
        </section>
    )
};

export default Favorite
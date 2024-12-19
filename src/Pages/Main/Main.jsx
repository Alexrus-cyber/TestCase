import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenu, listMenuSelector } from "../../slices/main";
import Cart from "./cart/Cart";

const Main = () => {
    const items = useSelector(listMenuSelector);
    const { isLoading } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenu());
    }, [dispatch])
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    {items.map((item) => (
                        <Cart key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Main;
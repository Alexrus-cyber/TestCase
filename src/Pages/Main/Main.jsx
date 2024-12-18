import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenu, listMenuSelector } from "../../slices/main";

const Main = () => {
    const items = useSelector(listMenuSelector);
    const { isLoading } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenu())
    }, [])
    console.log(isLoading)
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    {items.map((item) => (<div className={styles.content} key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Main;
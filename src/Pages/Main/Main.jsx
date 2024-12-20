import React, { memo, useEffect } from "react";
import styles from "./Main.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenu, listMenuSelector } from "../../slices/main";
import Cart from "./cart/Cart";
import Pagination from "./Pagination/Pagination";

const Main = memo(() => {
    const menu = useSelector(listMenuSelector);
    const { isLoading, itemsPerPage, currentPage, items } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenu());
    }, [dispatch])
    if (isLoading) {
        return <h1 style={{ textAlign: "center", minHeight: "100vh"}}>Loading...</h1>;
    }
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menu.items.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    {currentItems.map((item) => (
                        <Cart items = {items} key={item.id} id={item.id} {...item} />
                    ))}
                </div>
                <Pagination></Pagination>
            </div>
        </section>
    );
});

export default Main;
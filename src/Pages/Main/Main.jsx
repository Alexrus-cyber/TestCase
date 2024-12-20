import React, { memo, useEffect } from "react";
import styles from "./Main.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenu, getTotalPage, listMenuSelector } from "../../slices/main";
import Cart from "./cart/Cart";
import Pagination from "./Pagination/Pagination";

const Main = memo(() => {
    const items = useSelector(listMenuSelector);
    const { isLoading, itemsPerPage, currentPage } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotalPage());
        dispatch(getMenu());
    }, [dispatch])
    if (isLoading) {
        return <h1 style={{ textAlign: "center", minHeight: "100vh"}}>Loading...</h1>;
    }
    console.log(items);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    {currentItems.map((item) => (
                        <Cart itemsPerPage={itemsPerPage} currentPage={currentPage} key={item.id} {...item} />
                    ))}
                </div>
                <Pagination></Pagination>
            </div>
        </section>
    );
});

export default Main;
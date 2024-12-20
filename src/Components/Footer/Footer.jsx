import styles from "./Footer.module.scss";
import telega from "../../Assets/telegram.png";
import vk from "../../Assets/vk.png";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const Footer = memo(() => {
  const items = [
    {
      id: 2,
      src: vk,
      link: "https://vk.com",
      header: "Во вконтакте",
    },
    {
      id: 3,
      src: telega,
      link: "https://t.me",
      header: "В телеграмме",
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <NavLink
            className={styles.imgContainer}
            onClick={() => window.scrollTo(0, 0)}
            to={"/"}
          >
            <h1>Logo</h1>
          </NavLink>
          <p className={styles.textLeft}>Мы в социальных сетях</p>
          <div className={styles.icons}>
            {items.map((el) => (
              <NavLink key={el.id} to={el.link}>
                <img className={styles.icon} src={el.src} alt={"telegrams"} />
              </NavLink>
            ))}
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.info}>
            <p>Телефон: +7(494)910-99-99</p>
            <p>Резерв столиков по тел. +7(494)910-99-99</p>
          </div>
          <div className={styles.info}>
            <p>Вс-чт: 12.00-0.00</p>
            <p>Пт-сб: 12.00-1.00</p>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.rightTitle}>АКТУАЛЬНЫЕ НОВОСТИ</p>
          {items.map((el) => (
            <NavLink key={el.id} to={el.link} className={styles.rightText}>
              {el.header}
            </NavLink>
          ))}
        </div>
      </div>
      <p className={styles.footerText}>
        © 2024
      </p>
    </footer>
  );
});

export default Footer;
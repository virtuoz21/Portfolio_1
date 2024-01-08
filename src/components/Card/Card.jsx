import styles from "./Card.module.css";
import card_1 from "./../../img/categories/cat-01.jpg";
import card_2 from "./../../img/categories/cat-02.jpg";
import card_3 from "./../../img/categories/cat-03.jpg";
import arrowImg from "./../../img/icons/arrow.svg";

function Card(props) {
  return (
    <a href="#!">
      <div className={styles.card}>
        <img className={styles.card_img} src={props.img} alt="card_image" />
        <div className={styles.card_body}>
          <div className={styles.card_text}>
            <div className={styles.card_title}>{props.title}</div>
            <div className={styles.card_muted}>Explore now!</div>
          </div>
          <div className={styles.card_icon}>
            <img src={arrowImg} alt="arrow" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;

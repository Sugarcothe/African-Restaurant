import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/inugo5.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Abacha</h1>
      <span className={styles.price}>$18.9</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        error illo fuga aliquid porro, natus voluptate est eligendi nulla quasi
      </p>
    </div>
  );
};

export default PizzaCard;

import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/loko.jpg" alt="" layout="fill" />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            NTACHI OSSA IS A VERY NICE PLACE TO EAT, ENJOY AND LIVE A HAPPY LIFE
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304
            <br />
            NewTork, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304
            <br />
            NewTork, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304
            <br />
            NewTork, 85022
            <br />
            (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - SATURDAY
            <br /> 8:00am - 10pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

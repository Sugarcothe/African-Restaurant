import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    name: "ABACHA",
    img: "/img/inugo1.png",
    price: [19.9, 24.5, 33.2],
    desc: "lorem isp lorem isp fkd ofjwn akof lorem isp fkd ofjwn akof sdouf aoujf aldjd sa, afownadp sdouf aoujf aldjd sa, afownadp fkd ofjwn akof sdouf aoujf aldjd sa, afownadp, lorem isp fkd ofjwn akof sdouf aoujf aldjd sa, afownadp lorem isp fkd ofjwn akof sdouf aoujf aldjd sa, afownadp",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/soup.png" layout="fill" alt="" />
            <span className={styles.number}>you-try</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/soup.png" layout="fill" alt="" />
            <span className={styles.number}>Oga</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/soup.png" layout="fill" alt="" />
            <span className={styles.number}>Boku</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="soup"
              name="soup"
              className={styles.checkbox}
            />
            <label htmlFor="soup">Double Soup</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="chicken"
              name="chicken"
            />
            <label htmlFor="chicken">Extra Chicken</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="beef"
              name="beef"
            />
            <label htmlFor="beef">Extra Beef</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="fish"
              name="fish"
            />
            <label htmlFor="fish">Extra Fish</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="pork"
              name="pork"
            />
            <label htmlFor="pork">Extra Pork</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";

const Pizzalist = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST NATIVE FOOD</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsam, autem
        repellat consequatur iste earum modi voluptatibus. Numquam cupiditate
        quae, eveniet optio neque officiis omnis distinctio vero. Corporis
        voluptates deleniti quos perferendis veritatis fugit totam vel neque ad
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default Pizzalist

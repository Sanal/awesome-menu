import styles from "./Header.module.css";

const text = {
  title: "Neighborhood Kitchen",
  description: "Always fresh, always tasty.",
};

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <h1 className={styles.title}>{text.title}</h1>
        <p className={styles.description}>{text.description}</p>
      </div>
    </header>
  );
};

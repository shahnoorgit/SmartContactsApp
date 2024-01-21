import styles from "./CardsContainer.module.css";
import ContactCards from "./ContactCards";

function CardsContainer({ list, updatecon, ren }) {
  return (
    <div className={styles.Body}>
      {list.map((items) => (
        <ContactCards
          render={ren}
          key={items.id}
          updatecon={updatecon}
          list={items}
        />
      ))}
    </div>
  );
}

export default CardsContainer;

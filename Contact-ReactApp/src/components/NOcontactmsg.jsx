import styles from "./Nocontact.module.css";

function Nocontacts() {
  return (
    <div className={styles.NoCon}>
      <img src="./Images/Hands Contact.png" alt="Nocontacts" />
      <h2 id={styles.noContacthead}>No Contact Found</h2>
    </div>
  );
}

export default Nocontacts;

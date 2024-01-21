import styles from "./Nav.module.css";
import { AiFillPlusCircle } from "react-icons/ai";
function Nav({ add, search }) {
  const onaddshow = () => {
    const item = "Add Contact";
    add(item);
  };
  return (
    <>
      <div className={styles.Header}>
        <img src="./Images/logos_firebase.svg" alt="logo" />
        <h4 id={styles.head4}>Firebase Contact App</h4>
      </div>
      <div className={styles.Add}>
        <input
          onChange={(event) => search(event)}
          className={styles.search_input}
          style={{ backgroundImage: `url(/Images/search.svg)` }}
          id={styles.search}
          type="text"
          placeholder="Search..."
        />
        <AiFillPlusCircle
          onClick={() => onaddshow()}
          className={styles.pluse}
        />
      </div>
    </>
  );
}

export default Nav;

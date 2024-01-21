import styles from "./Contactcards.module.css";
import { PiUserCircleThin } from "react-icons/pi";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { DB } from "../../config/firestore";
function ContactCards({ list, updatecon, render }) {
  const Deletebtn = async (id) => {
    console.log(id, "hii");
    await deleteDoc(doc(DB, "123456789", id));
    render();
  };

  const UpdateCon = () => {
    const type = "Update Contact";
    updatecon(type);
  };
  return (
    <div className={styles.CardCon}>
      <div className={styles.Cardsmain}>
        <PiUserCircleThin
          className={styles.userlogo}
          style={{ fontSize: "50px" }}
        />{" "}
        <div className={styles.Info}>
          <h3 id={styles.name}>{list.Name}</h3>
          <p id={styles.mail}>{list.Email}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <RiEditCircleLine
          onClick={UpdateCon}
          style={{ fontSize: "30px" }}
          className={styles.Editbtn}
        />{" "}
        <MdDelete
          onClick={() => Deletebtn(list.id)}
          style={{ fontSize: "30px" }}
          className={styles.deletebtn}
        />
      </div>
    </div>
  );
}

export default ContactCards;

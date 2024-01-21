import { useState } from "react";
import styles from "./Modelmsg.module.css";
import { addDoc, collection } from "firebase/firestore";
import { DB } from "../../config/firestore";
function Modal({ type, render }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const Name = formData.get("Name");
    const Email = formData.get("Email");
    const id = Math.random(1, 10000);

    const contactData = { Name, Email }; // Create the object

    // Do something with the contactData object, e.g., send it to a server
    const SendDB = async () => {
      console.log("hii");
      const contactref = collection(DB, "123456789");
      await addDoc(contactref, contactData);
    };

    SendDB();
    render(id);

    const inputs = event.target.elements; // Get all form elements
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].tagName === "INPUT") {
        // Clear only input fields
        inputs[i].value = "";
      }
    }
  };

  return (
    <div className={styles.blur}>
      <form onSubmit={handleSubmit}>
        <div className={styles.modelCon}>
          <label id={styles.namelb}>
            Name <input name="Name" type="text" placeholder="enter name" />
          </label>

          <label id={styles.maillb}>
            Mail <input name="Email" type="text" placeholder="enter name" />
          </label>

          <button id={styles.submit} type="submit">
            {type}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;

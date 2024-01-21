import { useEffect, useState } from "react";
import "./App.css";
import BackWrapper from "./components/BackWrapper";
import CardsContainer from "./components/CardsContainer";
import Nocontacts from "./components/NOcontactmsg";
import Nav from "./components/Nav";
import { collection, getDocs } from "firebase/firestore";
import { DB } from "../config/firestore";
import Loading from "./components/Loading";
import Modal from "./components/Modalmsg";

function App() {
  const [addorup, setaddorup] = useState(" ");
  const [showadd, setshowadd] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [load, setload] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [render, setrender] = useState(null);

  const search = (event) => {
    const name = event.target.value;
    if (name === " ") {
      setFiltered([]);
    }
    const Sfilter = contacts.filter((items) =>
      items.Name.toLowerCase().includes(name.toLowerCase())
    );
    setFiltered(Sfilter);
  };
  useEffect(() => {
    const getContacts = async () => {
      try {
        setload(true);
        const Contactref = collection(DB, "123456789");
        const snapshot = await getDocs(Contactref);
        const Contactlist = snapshot.docs.map((docs) => {
          return {
            id: docs.id,
            ...docs.data(),
          };
        });
        setContacts(Contactlist);
        setFiltered(Contactlist);
        setload(false);
      } catch (error) {
        console.log(`error has happend${error}`);
      }
    };
    getContacts();
  }, [render]);
  const showaddmsg = (type) => {
    setaddorup(type);
    setshowadd(!showadd);
  };

  const ren = (id) => {
    const number = Math.random(0, 1000000);
    setrender(number);
    console.log(number);
  };
  const updatemsg = (type) => {
    setaddorup(type);
    setshowadd(!showadd);
  };
  return (
    <center>
      <BackWrapper>
        <Nav search={search} add={showaddmsg} />
        {load && <Loading />}
        {filtered.length === 0 ? (
          <Nocontacts />
        ) : (
          <CardsContainer ren={ren} updatecon={updatemsg} list={filtered} />
        )}
        {showadd && <Modal render={ren} type={addorup} />}
      </BackWrapper>
    </center>
  );
}

export default App;

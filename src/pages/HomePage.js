import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Contents from "../components/Contents";
import axios from "axios";

const HomePage = () => {
  const [contacts, setContacts] = useState(null)
  const [didUpdate,setDidUpdate]=useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:3004/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {});
  }, [didUpdate]);

  if (contacts === null) {
    return null;
  }
  return (
    <div>
      <Header />
      <Contents didUpdate={didUpdate} setDidUpdate={setDidUpdate} contacts={contacts} />
    </div>
  );
};

export default HomePage;

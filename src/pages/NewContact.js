import axios from "axios";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom"
import Header from "../components/Header";

const NewContact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    if (name === "" || phoneNumber === "") {
      alert("Boş alan bırakmayınız")
	  return
    }

	if(phoneNumber.length!==11){
		alert ("Telefon numarası 11 haneli olmalı")
		return
	}

    const newData = {
      id: String(new Date().getTime()),
      name: name,
      phoneNumber: phoneNumber,
    };

    axios
	.post("http://localhost:3004/contacts", newData)
	.then((res)=>{
		navigate("/")
	})
	.catch((err)=>{})
    
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleForm} className="container w-50">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Adı Soyadı
          </label>
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
            id="name"
            placeholder="Ör.: Ahmet"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Telefon Numarası
          </label>
          <input
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Ör.: 0555 1111111"
          />
        </div>
        <div className="d-flex ">
          <button className="btn btn-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default NewContact;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
	const navigate =useNavigate()
  const params = useParams();
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3004/contacts/${params.contactId}`)
      .then((res) => {
        setContact(res.data);
        setName(res.data.name);
        setPhoneNumber(res.data.phoneNumber);
        console.log(res);
      })
      .catch((err) => {});
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    // Validations

    if (name === "" || phoneNumber === "") {
      alert("Alanlar boş bırakılamaz");
    }

    const newData = {
      id: contact.id,
      name: name,
      phoneNumber: phoneNumber,
    };

	axios
	.put(`http://localhost:3004/contacts/${params.contactId}`,newData)
	.then ((res)=>{
		navigate("/")
	})
	.catch((err)=>{})
  };

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
            type="number"
            className="form-control"
            id="phoneNumber"
          />
        </div>
        <button className="btn btn-danger">Vazgeç</button>
        <button className="btn btn-success">Güncelle</button>
      </form>
    </div>
  );
};

export default EditContact;

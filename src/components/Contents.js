import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contents = ({ contacts, didUpdate, setDidUpdate }) => {
  const [searchText, setSearcText] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:3004/contacts/${id}`)
      .then((res) => {
        setDidUpdate(!didUpdate);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const tempArr = contacts.filter(
      (item) => item.name.toLowerCase().includes(searchText) === true || item.phoneNumber.includes(searchText)===true
    );
    setFilteredContacts(tempArr);
  }, [searchText]);

  return (
    <div className="container">
      {/* Searchbar */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              value={searchText}
              onChange={(event) => {
                setSearcText(event.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="İsim veya telefon numarası giriniz..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sıra Nu.</th>
            <th scope="col">Kişi</th>
            <th scope="col">Telefon Numarası</th>
            <th scope="col">Durum</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length === 0 ? (
            <>
              <tr className="text-center">
                <td colSpan={4}>Herhangi bir kayıt bulunmamaktadır</td>
              </tr>
            </>
          ) : (
            filteredContacts.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <Link
                    to={`/edit-page/${item.id}`}
                    className="fa-solid fa-pencil px-2"
                  ></Link>
                  <i
                    onClick={() => {
                      deleteContact(item.id);
                    }}
                    className="fa-regular fa-trash-can px-2"
                  ></i>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contents;

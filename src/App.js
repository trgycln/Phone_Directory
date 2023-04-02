import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditContact from "./pages/EditContact";
import NewContact from "./pages/NewContact";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/new-contact" element={<NewContact/>}/>
      <Route path="/edit-page/:contactId" element={<EditContact/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;

import React from "react";
import "./App.css";
import Phonebook from "./components/Phonebook";

export default function App() {
  const [phone, setPhone] = React.useState([]);

  const addContact = () => {
    let name = prompt("Enter name");
    if (name === null) return;
    let number = prompt("Enter number");
    if (number === null) return;
    setPhone((prevContacts) => [...prevContacts, { name, number }]);
  };

  const editContact = (index) => {
    let name = prompt("Enter new name", phone[index].name);
    if (name === null) return;
    let number = prompt("Enter new number", phone[index].number);
    if (number === null) return;
    setPhone((prevContacts) => {
      const updatedContacts = [...prevContacts];
      updatedContacts[index] = { name, number };
      return updatedContacts;
    });
  };

  const deleteContact = (index) => {
    setPhone((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  return (
    <main>
      <div className="main-top">
        <h1 className="main-heading">Phone Book</h1>
        <button onClick={addContact} className="btn">Add Contact</button>
      </div>
      <div className="contact-list">
        {phone.map((contact, index) => (
          <Phonebook
            key={index}
            name={contact.name}
            number={contact.number}
            onEdit={() => editContact(index)}
            onDelete={() => deleteContact(index)}
          />
        ))}
      </div>
    </main>
  );
}

import React from "react";

export default function Phonebook({ name, number, onEdit, onDelete }) {
  return (
    <div className="container">
      <p className="contact-name">{name}</p>
      <p className="contact-number">{number}</p>
      <button onClick={onEdit} className="btn-edit">Edit</button>
      <button onClick={onDelete} className="btn-delete">Delete</button>
    </div>
  );
}

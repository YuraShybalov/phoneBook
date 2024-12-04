import React from 'react';

const Contacts = ({ contacts }) => {
  console.log(contacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} - {number}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

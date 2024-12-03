import React from 'react';
import css from './Phomebook.module.css';

const Phonebook = () => {
  return (
    <div>
      <form className={css.form} action="">
        Name
        <label className={css.label} htmlFor="">
          <input type="text" name="name" required />
        </label>
        <label className={css.label} htmlFor="">
          Number
          <input type="tel" />
        </label>
        <button className={css.buttonSubmit} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Phonebook;

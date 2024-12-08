import css from './Phomebook.module.css';

const Phonebook = ({ handleChange, handleAddContact, state }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = state;

    if (!name || !number) {
      alert('Please fill out all fields.');
      return;
    }

    handleAddContact({ name, number });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="text"
          name="number"
          value={state.number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.buttonSubmit}>
        Add contact
      </button>
    </form>
  );
};

export default Phonebook;

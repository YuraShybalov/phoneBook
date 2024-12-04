import { Component } from 'react';
import css from './Phomebook.module.css';

class Phonebook extends Component {
  state = {
    filter: '',
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form className={css.form} action="">
          Name
          <label className={css.label} htmlFor="">
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              required
            />
          </label>
          <label className={css.label} htmlFor="">
            Number
            <input
              onChange={this.handleChange}
              type="text"
              name="number"
              value={this.state.number}
              required
            />
          </label>
          <button className={css.buttonSubmit} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Phonebook;

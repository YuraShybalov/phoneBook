import { Component } from 'react';
import { nanoid } from 'nanoid';

import Container from './Container/Container';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

import defaultContacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: defaultContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleAddContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <div>
        <Container title="Phonebook">
          <Phonebook
            handleChange={this.handleChange}
            handleAddContact={this.handleAddContact}
            state={this.state}
          />
        </Container>
        <Container title="Contacts">
          <Contacts
            contacts={this.state.contacts}
            handleDeleteContact={this.handleDeleteContact}
            handleChange={this.handleChange}
          />
        </Container>
      </div>
    );
  }
}

export default App;

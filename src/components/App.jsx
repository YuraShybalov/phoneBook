import { Component } from 'react';
// import contacts from './data/contacts.json';

import Container from './Container/Container';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  render() {
    return (
      <div>
        <Container title={'Phonebook'}>
          <Phonebook
            handelChange={this.state.handelChange}
            state={this.state}
          />
        </Container>
        <Container title={'Contacts'}>
          <Contacts />
        </Container>
      </div>
    );
  }
}
export default App;

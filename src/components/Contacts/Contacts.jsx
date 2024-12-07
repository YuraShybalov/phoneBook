import { Component } from 'react';

import contacts from '../data/contacts.json';

class Contacts extends Component {
  state = {
    contacts: contacts,
  };

  // componentDidUpdate(prevState) {
  //   if (prevState.contacts.length !== this.state.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  handelDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <ul>
        {this.state.contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>- {number}</p>
            <button type="button" onClick={()=>this.handelDelete(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;

// class Contacts extends Component {
//   state = {  }
//   render() {
//     return ();
//   }
// }

// export default Contacts;

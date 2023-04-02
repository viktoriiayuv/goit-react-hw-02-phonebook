import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (contact, reset) => {
    const { contacts } = this.state;
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      reset();
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterChange = filterText => {
    this.setState({ filter: filterText });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterChange={this.filterChange} />
        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

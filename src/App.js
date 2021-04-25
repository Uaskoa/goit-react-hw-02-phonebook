import { Component } from 'react';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList';
import shortId from 'shortid';
import './styles.css';
import "./App.scss"

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

  handleSearchChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    const { name, number } = data;

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: shortId.generate(), name, number },
      ],
    }));

    // /   /через concat
    // this.setState({
    //   contacts: contacts.concat({ id: shortId.generate(), name, number }),
    // });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    console.log('delete');

    console.log(contactId);
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    console.log(filteredContacts);
    return (
      <div className="App">
        <div className="container">
          <div className="phonebook">
            <h1>Phonebook</h1>

            <ContactForm onSubmit={this.formSubmitHandler} />
          </div>

          <h2>Contacts</h2>

          <Filter
            value={this.state.filter}
            onChange={this.handleSearchChange}
          />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;

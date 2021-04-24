import { Component } from 'react';
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import ContactList from'./components/ContactList'
import shortId from 'shortid';

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
  }

  formSubmitHandler = data => {
    console.log(data);
    
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

       
  }



  getFilteredContacts = () => {

    const { contacts, filter} = this.state
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    
  }

  render() {
         const filteredContacts = this.getFilteredContacts()

    console.log(filteredContacts);
    return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.handleSearchChange} />
        <ContactList contacts={filteredContacts}/>
    
      </div>
    );
  }
}

export default App;

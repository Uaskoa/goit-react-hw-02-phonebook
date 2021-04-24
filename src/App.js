import { Component } from 'react';
import Filter from './components/Filter'
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
    name: '',
    number: '',
  };

  nameInputId = shortId.generate();
  phoneInputId = shortId.generate();

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handlePhoneChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSearchChange = event => {
     this.setState({ filter: event.currentTarget.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: shortId.generate(), name, number },
      ]
    }));
 
// this.setState({
//   contacts: contacts.concat({ id: shortId.generate(), name, number }),
// });

    this.setState({ name: '' });
    this.setState({ number: '' });
  };


  getFilteredContacts = () => {

    const { contacts, filter} = this.state
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    
  }

  render() {
    // const normalizedFilter=this.state.filter.toLowerCase()
     const filteredContacts = this.getFilteredContacts()

    console.log(filteredContacts);
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            {' '}
            Name
            <input
              type="text"
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleNameChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor={this.phoneInputId}>
            Number
            <input
              type="tel"
              id={this.phoneInputId}
              value={this.state.number}
              name="number"
              onChange={this.handlePhoneChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
            <button type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>

        <Filter value={this.state.filter} onChange={this.handleSearchChange} />

        <ul>
          {filteredContacts.map(contact => (
            <li id={this.inputId}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

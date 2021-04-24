import ContactListItem from './ContactListItem'
import shortId from 'shortid';


const ContactList = ({contacts}) => (
    <ul>
     {contacts.map(contact => (
         <ContactListItem name={contact.name} number={contact.number} key={ shortId.generate()}/>
          ))}
        
    </ul>
)


export default ContactList
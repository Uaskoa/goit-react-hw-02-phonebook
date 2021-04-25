import ContactListItem from './ContactListItem';
// import shortId from 'shortid';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        name={contact.name}
        number={contact.number}
        key={contact.id}
        // onDeleteContact={() => onDeleteContact(shortId.generate())}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);


// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id}>
//         <span>{name} </span>
//         <span>{number} </span>
//         <button type="button" onClick={() => onDeleteContact(id)}>
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

export default ContactList;

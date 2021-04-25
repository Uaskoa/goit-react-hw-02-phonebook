const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id}>
    <span>{name} </span>
    <span>{number} </span>
    <button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default ContactListItem

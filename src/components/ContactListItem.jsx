const ContactListItem = ({id, name, number}) => (
<li id={id}>
  <span>{name} </span>
  <span>{number} </span>
</li>
)

export default ContactListItem

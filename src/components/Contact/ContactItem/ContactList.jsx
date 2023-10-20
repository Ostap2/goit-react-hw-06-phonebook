import { useSelector } from 'react-redux';
import ContactItem from 'components/Contact/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    if (filter === '') return contacts;

    const filterText = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterText)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </List>
  );
};

export default ContactList;

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import ContactForm from 'components/Contact/ContactForm/ContactForm';
import ContactList from 'components/Contact/ContactItem/ContactList';
import Filter from 'components/Contact/Filter/Filter';
import { Container } from './App.styled';

export default function App() {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSubmitHandler = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <h3>No contacts</h3>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
}

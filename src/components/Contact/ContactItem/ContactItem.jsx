import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = () => {
    dispatch(removeContact({ id }));
  };

  return (
    <li>
      <span className="contact-name">{name}:</span>
      <span className="contact-number">{number}</span>
      <button
        type="button"
        onClick={handleRemoveContact}
        className="remove-button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

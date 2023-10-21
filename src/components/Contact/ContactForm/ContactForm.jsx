// ContactForm.js
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Forma } from './ContactForm.styled';
import { useDispatch } from 'react-redux'; // Додайте імпорт useDispatch
import { addContact } from 'redux/contactsSlice'; // Перевірте шлях до вашого slice

export default function ContactForm() {
  const initialValues = { name: '', number: '' };
  const dispatch = useDispatch(); // Отримайте dispatch з Redux store

  const validationSchema = yup.object().shape({
    name: yup.string().min(4, 'Name must be at least 4 characters').max(32, 'Name is too long').required('Name is required'),
    number: yup.string().min(6, 'Number must be at least 6 characters').max(16, 'Number is too long').required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newState = { id: nanoid(), ...values };
    dispatch(addContact(newState)); // Використайте dispatch для додавання контакту

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Forma>
        <label htmlFor="nameId">Name</label>
        <Field
          type="text"
          name="name"
          placeholder="name contact"
          id="nameId"
        />
        <ErrorMessage name="name" component="div" className="error" />
        <label htmlFor="numId">Number</label>
        <Field
          type="tel"
          name="number"
          placeholder="111-111-11-11"
          id="numId"
        />
        <ErrorMessage name="number" component="div" className="error" />
        <button type="submit">Add contact</button>
      </Forma>
    </Formik>
  );
}

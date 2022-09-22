import { Loader } from '../components/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/Contact-list/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(fetchContacts());
  }, [dispatch]);

  const pending = useSelector(store => store.contacts.isLoading);
  return (
    <main>
      <h1>Add contact</h1>
      <ContactForm />

      {pending && <Loader />}
    </main>
  );
};

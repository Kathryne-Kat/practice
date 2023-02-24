import ContactForm from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../Contact/ContactList';

import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <h1 className={css.titleH1}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleH1}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        'No contacts'
      )}
    </div>
  );
}

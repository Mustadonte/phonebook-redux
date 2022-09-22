import List from '@mui/material/List';
import { ListItemMui } from 'components/ContactListItem/ContactListIteMui';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/Contacts/Contact-list/contacts-operations';
import { getFilteredContacts } from 'redux/Contacts/Contact-list/';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  useEffect(() => {
    return () => dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {contacts.map(({ id, name, number }) => (
        <ListItemMui key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

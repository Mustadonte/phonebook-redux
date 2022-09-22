import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeContact } from '../../redux/Contacts/Contact-list/contacts-operations';
import { useDispatch } from 'react-redux';
export const ListItemMui = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{ justifyContent: 'center' }}
      alignItems="flex-start"
      key={id} // To remove warning from Console.
      id={id}
      name={name}
      number={number}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline', bottom: '0' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {number}
            </Typography>
          </>
        }
      />
      <Button
        sx={{ marginLeft: 'auto', marginTop: '20px' }}
        variant="outlined"
        size="small"
        startIcon={<DeleteIcon />}
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </Button>
      <Divider variant="middle" component="p" absolute />
    </ListItem>
  );
};

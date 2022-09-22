import useForm from 'hooks/useForm';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/Contact-list/contacts-operations';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TtyRoundedIcon from '@mui/icons-material/TtyRounded';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const initialState = {
    name: '',
    number: '',
  };
  const onSubmit = data => {
    dispatch(addContact(data));
  };
  const dispatch = useDispatch();
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <FormControl variant="standard" margin="normal">
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard" margin="normal">
        <InputLabel htmlFor="Number">Number</InputLabel>
        <Input
          id="number"
          name="number"
          value={state.number}
          onChange={handleChange}
          required
          startAdornment={
            <InputAdornment position="start">
              <TtyRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="contained" type="summit">
        Primary Add contact
      </Button>
    </form>
  );
};

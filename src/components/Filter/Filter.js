import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/Contacts/Filter/';

import TextField from '@mui/material/TextField';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <TextField
      id="outlined-search"
      name="filter"
      label="Enter contact name"
      type="search"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      variant="standard"
    />
  );
};

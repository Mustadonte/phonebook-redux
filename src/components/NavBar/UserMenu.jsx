import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/auth-selectors';
import { logOut } from 'redux/Auth/auth-operations';
import { LogoutRounded } from '@mui/icons-material';
import Button from '@mui/material/Button';
export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUserName);
  const clickHandler = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <div style={{ position: 'absolute', right: '30px' }}>
      <Button variant="outlined" onClick={clickHandler}>
        {user}
        <LogoutRounded />
      </Button>
    </div>
  );
};

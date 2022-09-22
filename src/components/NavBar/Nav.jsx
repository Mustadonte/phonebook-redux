import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import { useNavigate } from 'react-router-dom';
import { CustomizedTab } from './Tabs';

export const NavBarMenu = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'transparent' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        indicatorColor="primary"
      >
        <CustomizedTab
          label="Lgin"
          value="Login"
          onClick={() => navigate('/login')}
        />
        <CustomizedTab
          label="Register"
          value="Register"
          onClick={() => navigate('/register')}
        />
      </Tabs>
    </Box>
  );
};

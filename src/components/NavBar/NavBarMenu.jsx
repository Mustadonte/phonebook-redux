import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import { useNavigate } from "react-router-dom";
import { CustomizedTab } from "./Tabs";

export const NavBarMenu = () => {
  const [value, setValue] = useState("Home");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "transparent" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        indicatorColor="primary"
      >
        <CustomizedTab
          label="Home"
          value="Home"
          onClick={() => navigate("/")}
        />
        <CustomizedTab
          label="Add Contact"
          value="Add Contact"
          onClick={() => navigate("/contacts")}
        />
        <CustomizedTab
          label="Contacts"
          value="Contacts"
          onClick={() => navigate("/search")}
        />
      </Tabs>
    </Box>
  );
};

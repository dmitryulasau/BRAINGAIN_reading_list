import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "../forms/Login";
import Registration from "../forms/Registration";
import Paper from "@mui/material/Paper";

export default function LogRegContainer() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component={"span"} variant={"body2"}>
              {children}
            </Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <>
      <Paper elevation={5} sx={{ width: 340, m: "20px auto" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="SIGN IN" />

          <Tab label="REGISTER" />
        </Tabs>
        <TabPanel value={value} index={0}>
          {/* LOGIN */}
          <Login handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* REGISTRATION */}
          <Registration />
        </TabPanel>
      </Paper>
    </>
  );
}

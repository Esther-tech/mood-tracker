import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navigation = () => {
  const [nav, setNav] = useState(1);

  const handleNavChange = (event, newValue) => {
    //change to reducer
    setNav(newValue)
  }

  return (
    <Tabs value={nav} onChange={handleNavChange} centered>
      <Tab label="Month" disabled />
      <Tab label="Year" />
    </Tabs>
  )
}

export default Navigation


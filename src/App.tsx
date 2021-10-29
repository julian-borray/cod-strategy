import React, {ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {Guns} from "./emuns/Guns";
import {SubmachineGuns} from './classes/SubmachineGuns';
import {BullfrogStrategy} from "./classes/SubmachineStrategies/BullfrogStrategy";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

function App() {
  const [selectedGun, setGun] = React.useState(Guns.BULLFROG);
  const context = new SubmachineGuns(new BullfrogStrategy());
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setGun(event.target?.value as Guns);
  };

  return (
    <div className="App">
      <Box sx={{ minWidth: 120 }}>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Gun</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedGun}
              label="Submachine gun"
              onChange={handleChange}>
            <MenuItem value={10}>{Guns.BULLFROG}</MenuItem>
            <MenuItem value={20}>{Guns.FENNEC}</MenuItem>
            <MenuItem value={30}>{Guns.UZI}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;

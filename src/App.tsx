import React, {useEffect, useState} from 'react';
import './App.css';
import {Guns} from "./emuns/Guns";
import {SubmachineGuns} from './classes/SubmachineGuns';
import {BullfrogStrategy} from "./classes/SubmachineStrategies/BullfrogStrategy";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FennecStrategy} from "./classes/SubmachineStrategies/FennecStrategy";
import {UziStrategy} from "./classes/SubmachineStrategies/UziStrategy";
import LinearProgress from '@mui/material/LinearProgress';
import {IWeaponData} from "./models/IStrategy";
import {type} from "os";
import Stack from '@mui/material/Stack';

function App() {
  const context = new SubmachineGuns(new BullfrogStrategy());
  const [selectedGun, setGun] = useState(Guns.BULLFROG);
  const [gunStatistics, setGunStatistics] = useState<IWeaponData>(context.executeStrategy());

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    switch (event.target?.value) {
      case Guns.BULLFROG:
        context.setStrategy(new BullfrogStrategy());
        break;
      case Guns.FENNEC:
        context.setStrategy(new FennecStrategy());
        break;
      case Guns.UZI:
        context.setStrategy(new UziStrategy())
    }
    setGunStatistics(context.executeStrategy())
    setGun(event.target?.value as Guns);
  };
  const renderStatistics = () => {
    const items: any = [];
    Object.keys(gunStatistics).forEach((data) => {
      if(typeof gunStatistics[data as keyof IWeaponData] === "number") {
        items.push(<LinearProgress variant="buffer" value={gunStatistics[data as keyof IWeaponData] as number || undefined} valueBuffer={100} key={data}/>)
      } else {
        items.push(<img src={gunStatistics[data as keyof IWeaponData] as string} key={data} width={1000} alt={selectedGun}/>)
      }
    });
    return items;
  }
  return (
    <div className="App">
      {console.log("render")}
      <Box sx={{ minWidth: 120 }}>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Gun</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedGun}
              label="Submachine gun"
              onChange={handleChange}>
            <MenuItem value={Guns.BULLFROG}>{Guns.BULLFROG}</MenuItem>
            <MenuItem value={Guns.FENNEC}>{Guns.FENNEC}</MenuItem>
            <MenuItem value={Guns.UZI}>{Guns.UZI}</MenuItem>
          </Select>
        </FormControl>
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
          {renderStatistics()}
        </Stack>
      </Box>
    </div>
  );
}

export default App;

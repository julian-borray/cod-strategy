import React, {useEffect} from 'react';
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

function App() {
  const [selectedGun, setGun] = React.useState(Guns.BULLFROG);
  const context = new SubmachineGuns(new BullfrogStrategy());
  let gunStatistics = context.executeStrategy();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    switch (selectedGun) {
      case Guns.BULLFROG:
        context.setStrategy(new BullfrogStrategy());
        break;
      case Guns.FENNEC:
        context.setStrategy(new FennecStrategy());
        break;
      case Guns.UZI:
        context.setStrategy(new UziStrategy())
    }
    gunStatistics = context.executeStrategy();
    setGun(event.target?.value as Guns);
    console.log(selectedGun);
  };
  const renderStatistics = (statistics?: IWeaponData) => {
    const items: any = [];
    let progressStatistics = statistics ? statistics : gunStatistics;
    Object.keys(progressStatistics).forEach((data) => {
      items.push(<p key={data}>{progressStatistics[data as keyof IWeaponData]}</p>)
    });
    return items;
  }
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
            <MenuItem value={Guns.BULLFROG}>{Guns.BULLFROG}</MenuItem>
            <MenuItem value={Guns.FENNEC}>{Guns.FENNEC}</MenuItem>
            <MenuItem value={Guns.UZI}>{Guns.UZI}</MenuItem>
          </Select>
        </FormControl>
        {renderStatistics(gunStatistics)}
      </Box>
    </div>
  );
}

export default App;

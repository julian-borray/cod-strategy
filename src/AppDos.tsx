import React, {useState} from 'react';
import './App.css';
import {Guns} from "./emuns/Guns";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import LinearProgress from '@mui/material/LinearProgress';
import {IWeaponData} from "./models/IStrategy";
import Stack from '@mui/material/Stack';

function App() {
  const [selectedGun, setGun] = useState(Guns.BULLFROG);
  const gunStatistics = null;

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    switch (event.target?.value) {
      case Guns.BULLFROG:
        break;
      case Guns.FENNEC:
        break;
      case Guns.UZI:
    }
    setGun(event.target?.value as Guns);
  };
  const putAccessories = (gun: string) =>{
    switch (gun) {
      case Guns.BULLFROG:
        return {
          muzzle: true,
          barrel: true,
          laser: true,
          optic: true,
          stock: true,
          underBarrel: true,
          ammunition: true,
          rearGrip: true,
          perk: true,
        }
      case Guns.FENNEC:
        break;
      case Guns.UZI:
    }
  }
  const calculatePrecision = (gun: string): number =>{
    let multiplier = 1;
    const base = 3;
    const accesories = putAccessories(gun);
    if(this.optic){
      multiplier = multiplier + 3;
    }
    if(this.underBarrel){
      multiplier = multiplier + 4;
    }
    return base * multiplier;
  }
  const calculateDamage = (gun: string): number =>{
    let multiplier = 1;
    const base = 3;
    if(this.barrel){
      multiplier = multiplier + 4;
    }
    if(this.muzzle){
      multiplier = multiplier + 2;
    }
    return base * multiplier;
  }
  const calculateRange = (gun: string): number =>{
    let multiplier = 1;
    const base = 4;
    if(this.barrel){
      multiplier = multiplier + 4;
    }
    if(this.muzzle){
      multiplier = multiplier + 2;
    }
    return base * multiplier;    }
  const calculateCadence = (gun: string): number =>{
    let multiplier = 1;
    const base = 3;
    if(this.barrel){
      multiplier = multiplier + 4;
    }
    if(this.ammunition){
      multiplier = multiplier + 1;
    }
    if(this.muzzle){
      multiplier = multiplier + 3;
    }
    return base * multiplier;
  }
  const calculateMobility = (gun: string): number =>{
    let multiplier = 1;
    const base = 3;
    if(this.stock){
      multiplier = multiplier + 7;
    }
    if(this.ammunition){
      multiplier = multiplier + 3;
    }
    return base * multiplier;
  }
  const calculateControl = (gun: string): number =>{
    let multiplier = 1;
    const base = 3;
    if(this.perk){
      multiplier = multiplier + 8;
    }
    if(this.laser){
      multiplier = multiplier + 4;
    }
    return base * multiplier;
  }
  const renderStatistics = () => {
    const items: any = [];
    Object.keys(gunStatistics).forEach((data) => {
      if(typeof gunStatistics[data as keyof IWeaponData] === "number") {
        const v = gunStatistics[data as keyof IWeaponData] as number || undefined;
        items.push(<div>
          <label>{data} {v}%</label>
          <LinearProgress variant="buffer" value={v} valueBuffer={100} key={data}/>
        </div>)
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

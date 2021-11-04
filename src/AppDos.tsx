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
  let gunStatistics: IWeaponData = {
    precision:0,
    damage:0,
    range:0,
    cadence:0,
    mobility:0,
    control: 0,
    image:''
  };

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    switch (event.target?.value) {
      case Guns.BULLFROG:
        gunStatistics = bullfrog(event.target?.value);
        break;
      case Guns.FENNEC:
        gunStatistics = fennec(event.target?.value);
        break;
      case Guns.UZI:
        gunStatistics = uzi(event.target?.value);
    }
    setGun(event.target?.value as Guns);
  };
  const bullfrog = (gun: string)=> {
    const values: IWeaponData = {
      precision:0,
      damage:0,
      range:0,
      cadence:0,
      mobility:0,
      control: 0,
      image:''
    }
    values.precision = calculatePrecision(gun, 4,5);
    values.damage = calculateDamage(gun, 4,5);
    return values;
  }
  const fennec = (gun: string)=> {
    const values: IWeaponData = {
      precision:0,
      damage:0,
      range:0,
      cadence:0,
      mobility:0,
      control: 0,
      image:''
    }
    values.precision = calculatePrecision(gun, 4,5);
    values.damage = calculateDamage(gun, 4,5);
    return values;
  }
  const uzi = (gun: string)=> {
    const values: IWeaponData = {
      precision:0,
      damage:0,
      range:0,
      cadence:0,
      mobility:0,
      control: 0,
      image:''
    }
    values.precision = calculatePrecision(gun, 4,5);
    values.damage = calculateDamage(gun, 4,5);
    return values;
  }
  const putAccessories = (gun: string) =>{
    switch (gun) {
      case Guns.BULLFROG:
        return {
          muzzle: true,
          barrel: false,
          laser: true,
          optic: true,
          stock: false,
          underBarrel: true,
          ammunition: true,
          rearGrip: true,
          perk: false,
        }
      case Guns.FENNEC:
        return {
          muzzle: false,
          barrel: true,
          laser: true,
          optic: false,
          stock: true,
          underBarrel: true,
          ammunition: true,
          rearGrip: false,
          perk: true,
        }
      case Guns.UZI:
        return {
          muzzle: true,
          barrel: true,
          laser: false,
          optic: true,
          stock: true,
          underBarrel: true,
          ammunition: true,
          rearGrip: true,
          perk: false,
        }
      default:
        return {
          muzzle: false,
          barrel: false,
          laser: false,
          optic: false,
          stock: false,
          underBarrel: false,
          ammunition: false,
          rearGrip: false,
          perk: false,
        }
    }
  }
  const calculatePrecision = (gun: string, base: number, multiplier: number): number =>{
    const accessories = putAccessories(gun);
    if(gun === Guns.BULLFROG) {
      if(accessories.optic){
        multiplier = multiplier + 3;
      }
      if(accessories.underBarrel){
        multiplier = multiplier + 4;
      }
      return base * multiplier;
    } else if(gun === Guns.UZI) {
      if(accessories.optic){
        multiplier = multiplier + 3;
      }
      if(accessories.underBarrel){
        multiplier = multiplier + 4;
      }
      return base * multiplier;
    } else {
      if(accessories.optic){
        multiplier = (multiplier*2) + 3;
      }
      if(accessories.stock){
        multiplier = multiplier + 4;
      }
      return base * multiplier;
    }
  }
  const calculateDamage = (gun: string, base: number, multiplier: number): number =>{
    const accessories = putAccessories(gun);
    if(gun === Guns.BULLFROG) {
      if(accessories.optic){
        multiplier = multiplier + 3;
      }
      if(accessories.underBarrel){
        multiplier = multiplier + 4;
      }
      return base * multiplier;
    } else if(gun === Guns.UZI) {
      if(accessories.optic){
        multiplier = multiplier + 3;
      }
      if(accessories.underBarrel){
        multiplier = multiplier + 4;
      }
      return base * multiplier;
    } else {
      if(accessories.optic){
        multiplier = (multiplier*2) + 3;
      }
      if(accessories.stock){
        multiplier = multiplier + 4;
      }
      return base * multiplier;
    }
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

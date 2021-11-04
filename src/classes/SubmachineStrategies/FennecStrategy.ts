import {IStrategy, IWeaponData} from "../../models/IStrategy";

export class FennecStrategy implements IStrategy {
    muzzle = false;
    barrel = true;
    laser = false;
    optic = true;
    stock = false;
    underBarrel = true;
    ammunition = true;
    rearGrip = false;
    perk = true;
    calculateStatistics(): IWeaponData{
        return {
            precision: this.calculatePrecision(),
            damage: this.calculateDamage(),
            range: this.calculateRange(),
            cadence: this.calculateCadence(),
            mobility: this.calculateMobility(),
            control: this.calculateControl(),
            image: 'https://www.dexerto.es/wp-content/uploads/sites/3/2021/07/06/Fennec.jpg',
        }
    }
    calculatePrecision(): number{
        let multiplier = 2;
        const base = 4;
        if(this.optic){
            multiplier = (multiplier*2) + 3;
        }
        if(this.underBarrel){
            multiplier = multiplier + 4;
        }
        return base * multiplier;
    }
    calculateDamage(): number{
        let multiplier = 2;
        const base = 4;
        if(this.barrel){
            multiplier = multiplier + 4;
        }
        if(this.muzzle){
            multiplier = multiplier + 2;
        }
        return base * multiplier;
    }
    calculateRange(): number{
        let multiplier = 3;
        const base = 2;
        if(this.barrel){
            multiplier = multiplier + 4;
        }
        if(this.muzzle){
            multiplier = multiplier + 2;
        }
        return base * multiplier;    }
    calculateCadence(): number{
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
    calculateMobility() {
        let multiplier = 9;
        const base = 2;
        if(this.stock){
            multiplier = multiplier + 7;
        }
        if(this.ammunition){
            multiplier = multiplier + 3;
        }
        return base * multiplier;
    }
    calculateControl(){
        let multiplier = 2;
        const base = 3;
        if(this.perk){
            multiplier = multiplier + 8;
        }
        if(this.laser){
            multiplier = multiplier + 4;
        }
        return base * multiplier;
    }
}

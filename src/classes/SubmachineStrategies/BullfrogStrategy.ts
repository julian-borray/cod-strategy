import {IStrategy, IWeaponData} from "../../models/IStrategy";

export class BullfrogStrategy implements IStrategy {
    muzzle = true;
    barrel = true;
    laser = false;
    optic = false;
    stock = false;
    underBarrel = true;
    ammunition = true;
    rearGrip = true;
    perk = true;
    calculateStatistics(): IWeaponData{
        return {
            precision: this.calculatePrecision(),
            damage: this.calculateDamage(),
            range: this.calculateRange(),
            cadence: this.calculateCadence(),
            mobility: this.calculateMobility(),
            control: this.calculateControl(),
            image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/cod-warzone-bullfrog-2356725.jpg?itok=FomBYdny',
        }
    }
    calculatePrecision(): number{
        let multiplier = 5;
        const base = 4;
        if(this.optic){
            multiplier = multiplier + 3;
        }
        if(this.underBarrel){
            multiplier = multiplier + 4;
        }
        return base * multiplier;
    }
    calculateDamage(): number{
        let multiplier = 4;
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
        const base = 4;
        if(this.barrel){
            multiplier = multiplier + 4;
        }
        if(this.muzzle){
            multiplier = multiplier + 2;
        }
        return base * multiplier;
    }
    calculateCadence(): number{
        let multiplier = 1;
        const base = 2;
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
        let multiplier = 5;
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
        const base = 4;
        if(this.perk){
            multiplier = multiplier + 4;
        }
        if(this.laser){
            multiplier = multiplier + 2;
        }
        return base * multiplier;
    }
}

import {IStrategy, IWeaponData} from "../../models/IStrategy";

export class UziStrategy implements IStrategy{
    calculateStatistics(): IWeaponData{
        return {
            precision:1,
            damage:1,
            range:1,
            cadence:1,
            mobility:1,
            control: 1,
            image: 'das',
        }
    }
    calculatePrecision(): number{
        return 1;
    }
    calculateDamage(): number{
        return 1;
    }
    calculateRange(): number{
        return 1;
    }
    calculateCadence(): number{
        return 1;
    }
}

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
            image: 'uzi',
        }
    }
    calculatePrecision(): number{
        return 3;
    }
    calculateDamage(): number{
        return 3;
    }
    calculateRange(): number{
        return 3;
    }
    calculateCadence(): number{
        return 3;
    }
}

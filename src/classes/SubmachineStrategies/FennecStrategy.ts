import {IStrategy, IWeaponData} from "../../models/IStrategy";

export class FennecStrategy implements IStrategy {
    calculateStatistics(): IWeaponData{
        return {
            precision:1,
            damage:1,
            range:1,
            cadence:1,
            mobility:1,
            control: 1,
            image: 'fennec',
        }
    }
    calculatePrecision(): number{
        return 2;
    }
    calculateDamage(): number{
        return 2;
    }
    calculateRange(): number{
        return 2;
    }
    calculateCadence(): number{
        return 2;
    }
}

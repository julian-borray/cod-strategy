import {IStrategy, IWeaponData} from "../../models/IStrategy";

export class FennecStrategy implements IStrategy {
    calculateStatistics(): IWeaponData{
        return {
            precision: this.calculatePrecision(),
            damage:1,
            range:1,
            cadence:1,
            mobility:1,
            control: 1,
            image: 'https://www.dexerto.es/wp-content/uploads/sites/3/2021/07/06/Fennec.jpg',
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

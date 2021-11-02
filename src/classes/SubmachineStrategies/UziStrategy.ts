import {IStrategy, IWeaponData} from "../../models/IStrategy";

export class UziStrategy implements IStrategy{
    calculateStatistics(): IWeaponData{
        return {
            precision: this.calculatePrecision(),
            damage:1,
            range:1,
            cadence:1,
            mobility:1,
            control: 1,
            image: 'https://www.dexerto.es/wp-content/uploads/sites/3/2021/04/20/UZI-scaled.jpg',
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

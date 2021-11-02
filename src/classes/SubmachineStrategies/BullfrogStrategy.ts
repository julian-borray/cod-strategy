import {IStrategy, IWeaponData} from "../../models/IStrategy";

export class BullfrogStrategy implements IStrategy {
    calculateStatistics(): IWeaponData{
        return {
            precision: this.calculatePrecision(),
            damage:1,
            range:1,
            cadence:1,
            mobility:1,
            control: 1,
            image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/cod-warzone-bullfrog-2356725.jpg?itok=FomBYdny',
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

export interface IWeaponData {
    precision:number;
    damage:number;
    range:number;
    cadence:number;
    mobility:number;
    control: number;
    image: string;
}

export interface IStrategy {
    calculateStatistics: () => IWeaponData;
    calculatePrecision: () => number;
    calculateDamage: () => number;
    calculateRange: () => number;
    calculateCadence: () => number;
}

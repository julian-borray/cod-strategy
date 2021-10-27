interface IWeaponData {
    precision:number;
    damage:number;
    range:number;
    cadence:number;
    mobility:number;
    control: number;
    image: string;
}

export interface IStrategy {
    calculateStatistics: (name: string) => IWeaponData
}

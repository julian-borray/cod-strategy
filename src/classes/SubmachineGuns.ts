import {IStrategy} from "../models/IStrategy";

export class SubmachineGuns {
    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy){
        this.strategy = strategy;
    }

    executeStrategy(){
        return this.strategy.calculateStatistics();
    }
}

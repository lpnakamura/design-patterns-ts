import { Transport } from './transport';

export abstract class Creator {
    abstract factoryMethod(): Transport;

    public someOperation(): string {
        return this.factoryMethod().deliver();
    }
}

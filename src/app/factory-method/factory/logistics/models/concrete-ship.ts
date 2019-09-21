import { Transport } from './transport';

export class ConcreteShip implements Transport {
    deliver(): string {
        return 'Delivery by sea in a container';
    }
}

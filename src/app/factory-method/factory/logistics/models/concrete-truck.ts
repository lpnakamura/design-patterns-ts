import { Transport } from './transport';

export class ConcreteTruck implements Transport {
    deliver(): string {
        return 'Deliver by land in a box';
    }
}

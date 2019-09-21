import { Creator } from './creator';
import { Transport } from './transport';
import { ConcreteShip } from './concrete-ship';

export class Ship extends Creator {
    factoryMethod(): Transport {
        return new ConcreteShip();
    }
}

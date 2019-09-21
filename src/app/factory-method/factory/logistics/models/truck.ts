import { Creator } from './creator';
import { Transport } from './transport';
import { ConcreteTruck } from './concrete-truck';

export class Truck extends Creator {
    factoryMethod(): Transport {
        return new ConcreteTruck();
    }
}

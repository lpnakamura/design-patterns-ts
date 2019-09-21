import { Observer } from './observer.interface';
import { Subject } from './subject.interface';

export class ConcreteObserverA implements Observer {
    update(subject: Subject): void {
        console.log('ConcreteObserverA: Reacted to the event.');
    }
}

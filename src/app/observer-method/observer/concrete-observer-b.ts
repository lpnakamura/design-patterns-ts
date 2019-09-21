import { Observer } from './observer.interface';
import { Subject } from './subject.interface';

export class ConcreteObserverB implements Observer {
    update(subject: Subject): void {
        console.log('ConcreteObserverB: Reacted to the event.');
    }
}

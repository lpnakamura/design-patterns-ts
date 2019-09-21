import { Subject } from './subject.interface';
import { Observer } from './observer.interface';

export class Publisher implements Subject {

    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
        console.log('Subject: Attached an observer.');
    }

    detach(observer: Observer): void {
        const removeIndex = this.observers.indexOf(observer);
        this.observers.splice(removeIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    notify(): void {
        console.log('Subject: Notifying observers...');
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }
}

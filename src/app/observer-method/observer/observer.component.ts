import { Component, OnInit } from '@angular/core';
import { Publisher } from './publisher';
import { ConcreteObserverA } from './concrete-observer-a';
import { ConcreteObserverB } from './concrete-observer-b';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const publisher = new Publisher();
    const concreteObserverA = new ConcreteObserverA();
    const concreteObserverB = new ConcreteObserverB();

    publisher.attach(concreteObserverA);
    publisher.attach(concreteObserverB);

    publisher.notify();

    publisher.detach(concreteObserverA);

    publisher.notify();
  }

}

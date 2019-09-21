import { Component, OnInit } from '@angular/core';
import { Handler } from './handler';
import { MonkeyHandler } from './monkey-handler';
import { SquirrelHandler } from './squirrel-handler';
import { DogHandler } from './dog-handler';

@Component({
  selector: 'app-chain-of-responsability',
  templateUrl: './chain-of-responsability.component.html',
  styleUrls: ['./chain-of-responsability.component.css']
})
export class ChainOfResponsabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const monkey = new MonkeyHandler();
    const squirrel = new SquirrelHandler();
    const dog = new DogHandler();

    monkey.setNext(dog);

    console.log('Chain: Monkey > Squirrel > Dog\n');
    this.clientCode(monkey);
    console.log('');

    console.log('Subchain: Squirrel > Dog\n');
    this.clientCode(squirrel);
  }

  private clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}

}

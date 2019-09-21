import { Button } from './button';

export abstract class Dialog {
    abstract createButton(): Button;

    callRender(): string {
       return this.createButton().render();
    }

    callOnClick(): string {
        return this.createButton().onClick();
    }
}

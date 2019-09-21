import { AbstractHandler } from './abstract-handler';

export class SquirrelHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

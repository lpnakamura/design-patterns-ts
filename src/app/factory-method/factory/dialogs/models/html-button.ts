import { Button } from './button';

export class HtmlButton implements Button {
    render() {
        return 'Return an HTML representation of a button.';
    }

    onClick() {
        return 'Bind a web browser click event.';
    }
}

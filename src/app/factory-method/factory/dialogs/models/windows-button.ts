import { Button } from './button';

export class WindowsButton implements Button {
    render() {
        return 'Render a button in Windows style';
    }

    onClick() {
        return 'Bind a native OS click event.';
    }
}
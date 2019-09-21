import { Dialog } from './dialog';
import { WindowsButton } from './windows-button';


export class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
     }
}

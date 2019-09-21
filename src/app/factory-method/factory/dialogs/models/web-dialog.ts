import { Dialog } from './dialog';
import { HtmlButton } from './html-button';


export class WebDialog extends Dialog {
    createButton() {
        return new HtmlButton();
     }
}

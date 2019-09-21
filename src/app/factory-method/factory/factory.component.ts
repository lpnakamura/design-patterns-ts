import { Component, OnInit } from '@angular/core';
import { Creator } from './logistics/models/creator';
import { Ship } from './logistics/models/ship';
import { Truck } from './logistics/models/truck';
import { Dialog } from './dialogs/models/dialog';
import { WindowsDialog } from './dialogs/models/windows-dialog';
import { WebDialog } from './dialogs/models/web-dialog';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html'
})
export class FactoryComponent implements OnInit {

  constructor() { }

  creator: Creator;
  shipDeliver: string;
  truckDeliver: string;

  dialog: Dialog;

  dialogMessages: string[] = [];

  ngOnInit() {
    this.logistics();
    this.dialogs();
  }

  logistics(): void {
    this.creator = new Ship();
    this.shipDeliver = this.creator.someOperation();

    this.creator = new Truck();
    this.truckDeliver = this.creator.someOperation();
  }

  dialogs(): void {
    this.dialog = new WindowsDialog();
    this.dialogMessages.push(this.dialog.callRender());
    this.dialogMessages.push(this.dialog.callOnClick());

    this.dialog = new WebDialog();
    this.dialogMessages.push(this.dialog.callRender());
    this.dialogMessages.push(this.dialog.callOnClick());
  }
}

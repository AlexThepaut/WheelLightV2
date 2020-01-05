import { Injectable } from '@angular/core';
import { PopupDialog } from '../popup/popup.dialog';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  errorMsg = `An error occured.`;

  constructor(private dialog: MatDialog) { }

  showPopup(msg?: string): void {
    if (msg != undefined) {
      this.errorMsg = msg
    }

    const dialogRef = this.dialog.open(PopupDialog, {
      width: '250px',
      data: this.errorMsg
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

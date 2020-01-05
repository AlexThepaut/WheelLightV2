import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    selector: 'popup-dialog',
    templateUrl: 'popup-dialog.html',
    styleUrls: ['./popup.dialog.css']
  })
  export class PopupDialog {
  
    constructor(
      public dialogRef: MatDialogRef<PopupDialog>,
      @Inject(MAT_DIALOG_DATA) public data: string) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
  
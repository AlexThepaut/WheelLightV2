import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ColorEvent } from 'ngx-color';
import { ColorService } from '../service/color.service';

@Component({
  selector: 'color-popup',
  templateUrl: './color-popup.component.html',
  styleUrls: ['./color-popup.component.css'],
})
export class ColorPopupComponent {

  constructor(public dialogRef: MatDialogRef<ColorPopupComponent>, private colorService: ColorService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeComplete($event: ColorEvent) {
    this.colorService.color = $event;
  }

  validColor() {
    this.dialogRef.close();
  }

}

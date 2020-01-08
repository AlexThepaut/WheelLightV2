import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ColorEvent } from 'ngx-color';
import { ColorService } from '../service/color.service';
import { ColoredText } from '../model/colored-text.model';

@Component({
  selector: 'color-popup',
  templateUrl: './color-popup.component.html',
  styleUrls: ['./color-popup.component.css'],
})
export class ColorPopupComponent implements OnInit {
  color: any;

  constructor(public dialogRef: MatDialogRef<ColorPopupComponent>, private colorService: ColorService, @Inject(MAT_DIALOG_DATA) public data: ColoredText) { }

  ngOnInit() {
    this.color = {
      r: this.data.colorR,
      g: this.data.colorG,
      b: this.data.colorB
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeComplete($event: ColorEvent) {
    const rgb = $event.color.rgb;
    this.data.colorRGB = `rgb(${$event.color.rgb.r},${$event.color.rgb.g},${$event.color.rgb.b})`;
    this.data.colorR = $event.color.rgb.r;
    this.data.colorG = $event.color.rgb.g;
    this.data.colorB = $event.color.rgb.b;
  }

  validColor() {
    this.colorService.coloredText = this.data;
    this.dialogRef.close();
  }
}

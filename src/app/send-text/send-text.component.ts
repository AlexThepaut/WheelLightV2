import { Component, OnInit } from '@angular/core';
import { ColoredText } from '../model/colored-text.model';
import { BluetoothService } from '../service/bluetooth.service';
import { PopupService } from '../service/popup.service';
import { ColorEvent } from 'ngx-color';
import { ColorPopupComponent } from '../color-popup/color-popup.component';
import { MatDialog } from '@angular/material';
import { ColorService } from '../service/color.service';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrls: ['./send-text.component.css']
})
export class SendTextComponent implements OnInit {
  textPreview = new Array<ColoredText>();
  defaultColor = 'red';

  constructor(private bluetoothService: BluetoothService, private popup : PopupService, private dialog: MatDialog, private colorService: ColorService) { }

  ngOnInit() {
    this.bluetoothService.isConnected().then(success => {
      console.log(`Connection OK`);
    },error => {
      this.popup.showPopup(`Please connect to a device.`);
    });
  }

  handleSend() {
    this.bluetoothService.send(this.colorService.formatTestToSend(this.textPreview)).then(success => {
      console.log(`Message sent without errors.`);
    }, error => {
      console.log(`An error occured while sending the message.`);
    });
  }

  changeColor(indexTextPreview?: number) {
    console.log(indexTextPreview);
    let text = new ColoredText('', '', 255, 255, 255, this.textPreview.length);
    if (indexTextPreview != undefined) {
      text = this.textPreview[indexTextPreview];
      console.log(this.textPreview[indexTextPreview])
    }

    const dialogRef = this.dialog.open(ColorPopupComponent, {
      data: text
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.colorService.coloredText.index < this.textPreview.length) {
        this.textPreview[this.colorService.coloredText.index] = this.colorService.coloredText;
      } else {
        this.textPreview.push(this.colorService.coloredText);
      }
    });
  }
}

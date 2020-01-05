import { Component, OnInit } from '@angular/core';
import { TextPreview } from '../model/text-preview.model';
import { BluetoothService } from '../service/bluetooth.service';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrls: ['./send-text.component.css']
})
export class SendTextComponent implements OnInit {

  textToSend = '';
  textPreview: TextPreview[];
  defaultColor = 'red';

  constructor(private bluetoothService: BluetoothService, private popup : PopupService) { }

  ngOnInit() {
    this.bluetoothService.isConnected().then(success => {
      console.log(`Connection OK`);
    },error => {
      this.popup.showPopup(`Please connect to a device.`);
    });
  }

  setPreview() {
    this.textPreview = [];
    let partSplit = this.textToSend.split('*');
    partSplit.forEach((p) => {
      let colorSplit = p.split(']');
      let color = (colorSplit.length > 1) ? `rgb(${colorSplit[0].substr(1)})` : this.defaultColor;
      let text = (colorSplit.length > 1) ? colorSplit[1].slice(0, -1) : colorSplit[0];
      this.textPreview = [... this.textPreview, new TextPreview(text, color)];
    });
  }

  textWriting(event) {
    let temp = event.target.value;
    if(this.textToSend.lastIndexOf('*/*') != -1) {
      this.textToSend = temp.slice(0, this.textToSend.indexOf('*/*')+1) + `[r, g, b] text` + temp.slice(this.textToSend.indexOf('*/*')+1, this.textToSend.length)
    }else {
      this.textToSend = temp;
    }
    this.setPreview();
  }

  handleSend() {
    this.bluetoothService.send(this.textToSend).then(success => {
      console.log(`Message sent without errors.`);
    }, error => {
      console.log(`An error occured while sending the message.`);
    });
  }
}

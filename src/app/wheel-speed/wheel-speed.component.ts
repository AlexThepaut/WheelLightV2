import { Component, OnInit } from '@angular/core';
import { BluetoothService } from '../service/bluetooth.service';
import { PopupService } from '../service/popup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wheel-speed',
  templateUrl: './wheel-speed.component.html',
  styleUrls: ['./wheel-speed.component.css']
})
export class WheelSpeedComponent implements OnInit {

  wheelSpeed = `0`;

  subscribed : any;

  constructor(private bluetoothService: BluetoothService, private popup : PopupService) { }

  ngOnInit() {
    this.bluetoothService.isConnected().then(success => {
      this.subscribed = this.bluetoothService.startRead().subscribe(success => {
        this.wheelSpeed = success;
      });
    },error => {
      this.popup.showPopup(`Please connect to a device.`);
      this.subscribed = undefined;
    });
    /*const speedMock = setInterval(() => {
      this.wheelSpeed = Math.floor((Math.random()*(30-15+1)+15) * 100) / 100;
    }, 200);*/
  }

  ngOnDestroy() {
    if(this.subscribed !== undefined){
      this.subscribed.unsubscribe();
    }
  }

}

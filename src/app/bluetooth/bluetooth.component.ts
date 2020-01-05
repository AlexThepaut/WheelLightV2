import { Component, OnInit, Inject } from '@angular/core';
import { BluetoothService } from '../service/bluetooth.service';
import { Router } from '@angular/router';
import { PATH_HOME } from '../app.routes.constantes';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.css']
})
export class BluetoothComponent implements OnInit {

  selected: any;
  bluetoothDevice = [{ 'id': 1, 'name': 'appareil 1' }, { 'id': 2, 'name': 'appareil 2' }, { 'id': 3, 'name': 'appareil 3' }];

  constructor(private bluetoothService: BluetoothService, private router: Router, private popup : PopupService) { }

  ngOnInit() {
    this.bluetoothService.isEnabled().then(success => {
      this.bluetoothService.listDevice().then(success => {
        this.bluetoothService.refreshPairedList(success); this.bluetoothDevice = this.bluetoothService.pairedDevices;
      }, error => {
        this.popup.showPopup('An error occured while parssing paired devices.');
      });
    }, error => {
      this.popup.showPopup('Please turn on your BlueTooth.');
    });
  }

  handleConnect() {
    this.bluetoothService.connect(this.selected.id).subscribe(success => {
      this.bluetoothService.connectedDevice = this.selected;
      this.router.navigate([PATH_HOME]);
    }, error => {
      this.popup.showPopup(`An error occured while connecting to ${this.selected.name}`);
    });

    console.log('CLICKED');
  }
}
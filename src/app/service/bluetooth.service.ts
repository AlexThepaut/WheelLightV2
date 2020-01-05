import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  pairedDevices = [];
  connectedDevice = {name: 'Nothing'};

  constructor(private bluetoothSerial: BluetoothSerial) { }

  listDevice(): Promise<any> {
      return this.bluetoothSerial.list();
  }

  refreshPairedList(returnedDevices: any[]): void {
    this.pairedDevices = returnedDevices;
    console.log('Success retrieving paired devices!');
  }

  isEnabled() : Promise<any> {
    return this.bluetoothSerial.isEnabled();
  }

  isConnected() : Promise<any> {
    return this.bluetoothSerial.isConnected();
  }

  connect(addr: string): Observable<any> {
    return this.bluetoothSerial.connect(addr);
  }

  send(data : string) : Promise<any> {
    return this.bluetoothSerial.write(data);
  }

  startRead() : Observable<any> {
    return this.bluetoothSerial.subscribe('\n');
  }

}

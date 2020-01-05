import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_HOME, PATH_BLUETOOTH } from '../app.routes.constantes';
import { BluetoothService } from '../service/bluetooth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  
  connectedDevice = '';
  
  constructor(private router: Router, private bluetoothService: BluetoothService) { }
  
  ngOnInit() {
    
  }
  
  ngDoCheck(): void {
    if(this.connectedDevice !== this.bluetoothService.connectedDevice.name) {
      this.connectedDevice = this.bluetoothService.connectedDevice.name
    }
  }

  handleReturn() {
    this.router.navigate([PATH_HOME]);
  }

  isHomePage() {
    return this.router.url === `/${PATH_HOME}` ? false : true;
  }
}

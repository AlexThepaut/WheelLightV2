import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , RouteReuseStrategy } from '@angular/router';
import { ROUTES } from './app.routes';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { SendTextComponent } from './send-text/send-text.component';
import { WheelSpeedComponent } from './wheel-speed/wheel-speed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSlideToggleModule, 
  MatIconModule, 
  MatButtonModule, 
  MatInputModule, 
  MatSelectModule, 
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { PopupDialog } from './popup/popup.dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BluetoothComponent,
    SendTextComponent,
    WheelSpeedComponent,
    NavbarComponent,
    PopupDialog
  ],
  imports: [
    BrowserModule,
	
	IonicModule.forRoot(),
	AppRoutingModule,
	
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
  ],
  entryComponents: [
    BluetoothComponent,
    PopupDialog
  ],
  providers: [
    FormBuilder,
    BluetoothSerial,
	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

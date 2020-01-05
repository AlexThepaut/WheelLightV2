import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PATH_HOME, PATH_BLUETOOTH, PATH_SENDTEXT, PATH_SPEED } from './app.routes.constantes';
import { HomeComponent } from './home/home.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { SendTextComponent } from './send-text/send-text.component';
import { WheelSpeedComponent } from './wheel-speed/wheel-speed.component';

const routes: Routes = [
  { path: PATH_HOME, component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

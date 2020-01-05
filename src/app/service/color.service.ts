import { Injectable } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  color: ColorEvent;

  constructor() { }
}

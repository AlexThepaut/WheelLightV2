import { Injectable } from '@angular/core';
import { ColoredText } from '../model/colored-text.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  coloredText: ColoredText;

  constructor() { }

  formatTestToSend(textToFormat: Array<ColoredText>): string {
    let textToSend = '';

    textToFormat.forEach(text => {
      textToSend += (`/*[${text.colorR},${text.colorG},${text.colorB}]${text.text}*`);
    });

    console.log(textToSend);
    
    return textToSend;
  }
}

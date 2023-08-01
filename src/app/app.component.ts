import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hojadetiempo';
  name = 'Skips';
  age = 24;
  rightPlace = "tu duna"
  wrongPlace = "la luna";
  img = 'https://media.tenor.com/ZhM2wKMMnb8AAAAd/go-to-moon-skips.gif';
  btnDisabled = true;
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './components/cabecera/cabecera';
import { Pie } from './components/pie/pie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, Pie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

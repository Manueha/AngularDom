import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {DomPracticaComponent} from './dom-practica/dom-practica.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DomPracticaComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Manel Angular';

  constructor() {


  }

  ngOnInit(): void {
  }
}

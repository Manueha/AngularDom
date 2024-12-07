import {Component, OnInit} from '@angular/core';
// @ts-ignore
import  {yellowsubmarine,modificar,countWords,Imatge,mostrarLlista} from '../Funcions/FuncionsJS.js'

@Component({
  selector: 'app-dom-practica',
  imports: [],
  templateUrl: './dom-practica.component.html',
  standalone: true,
  styleUrl: './dom-practica.component.css'
})
export class DomPracticaComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
    let exc1 = document.getElementById("majuscules")!;
    exc1.innerHTML = exc1.innerHTML.toUpperCase()

    // @ts-ignore
    document.getElementById("url").textContent = document.URL;

    yellowsubmarine();
    modificar();
    countWords();
    Imatge();
    mostrarLlista("llistat", "bomboclat","si","hola");

  }



}

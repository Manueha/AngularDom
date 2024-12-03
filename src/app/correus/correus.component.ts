import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-correus',
  imports: [
    NgForOf,
    NgIf

  ],
  templateUrl: './correus.component.html',
  standalone: true,
  styleUrl: './correus.component.css'
})
export class CorreusComponent implements OnInit{
  title : string =  "Manel Angular 1"
  correuss: any
  correuLlegit: number;
  correuNoLlegit: number;

  constructor() {
    this.correuLlegit = 0
    this.correuNoLlegit = 0

    let comptarCaracter = this.title.length

    console.log("Numero de lletres que conté titól : " +  comptarCaracter)

    const correu = {
      titol: "titol del 1",
      cos: "cos del Mail",
      emisor: "manel.dominguez@gmail.com",
      destinatari: "manel2.dominguez@gmail.com",
      llegit: false
    }
    const correu1 = {
      titol: "titol del 2 ",
      cos: "cos del mail",
      emisor: "manel.dominguez@gmail.com",
      destinatari: "manel3.dominguez@gmail.com",
      llegit: true
    }

    this.correuss = []
    this.correuss.push(correu)
    this.correuss.push(correu1)

    for (let contador = 0; contador < this.correuss.length;contador++){
      if(this.correuss[contador].llegit == true){
        this.correuLlegit++
      }else{
        this.correuNoLlegit++
      }
    }

  }

  ngOnInit() {
  }


}





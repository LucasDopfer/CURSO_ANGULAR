import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pessoa: any = {
    nome: 'def',
    idade: 18
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

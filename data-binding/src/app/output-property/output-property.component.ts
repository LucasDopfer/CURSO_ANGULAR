import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: any = 0;

  mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
  }

  decrementa() {
    this.valor--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

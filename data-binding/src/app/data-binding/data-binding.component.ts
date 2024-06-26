import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: any;

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";

  valorInicial: number = 15;

  botaoClicado() {
    alert('Botão clicado!');
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

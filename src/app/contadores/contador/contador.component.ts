import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h3>
      La base es<strong> {{ base }}</strong>
    </h3>

    <button (click)="acumular(-base)">- {{ base }}</button>
    <span>{{ valor }}</span>
    <button (click)="acumular(base)">+ {{ base }}</button>
  `,
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    valor: number = 0;
    base: number = 8;
    acumular( valor: number ){
      this.valor += valor;
    }


}

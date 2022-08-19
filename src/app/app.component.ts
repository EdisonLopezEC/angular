import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
 
})
export class AppComponent {
  titulo: string = 'Contador App';
  valor: number = 0;
  base: number = 8;
  acumular( valor: number ){
    this.valor += valor;
  }

}






import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroes: string[] = ['Aquaman', 'Superman', 'Batman','Spiderman'];
  heroeBorrado: string = '';
  borrarHeroe(){
   this.heroeBorrado = this.heroes.pop() || ''; 
  }
  borrarHeroePrimero(){
   this.heroeBorrado = this.heroes.shift() || '';
  }

}

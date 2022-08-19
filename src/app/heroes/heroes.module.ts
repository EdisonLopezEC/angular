import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule(
    {
        //que componentes conforman el modulo
        declarations: [
            HeroeComponent,
            ListadoComponent
        ],
        //que vamos a hacer visibles fuera del modulo
        exports: [
            ListadoComponent
        ],

        imports: [
            CommonModule
        ] 
    }
)
export class HeroesModule{

}
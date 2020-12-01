import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaFiltroRoutingModule } from './tabla-filtro-routing.module';

//SERVICE
import { ServicioService } from '../../servicios/servicio.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablaFiltroRoutingModule
  ],
  providers: [ServicioService],
})
export class TablaFiltroModule { }

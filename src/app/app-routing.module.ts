import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorasTrabajoComponent } from './components/horas-trabajo/horas-trabajo.component';
import { ReporteServicioComponent } from './components/reporte-servicio/reporte-servicio.component';


const routes: Routes = [
  {path:"reporte-servicio", component:ReporteServicioComponent},
  {path:"horas-trabajo",component:HorasTrabajoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

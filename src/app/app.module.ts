import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { VerClienteComponent } from './clientes/ver-cliente/ver-cliente.component';

import { rutas_app } from './app.routes';
import { SinAutorizacionComponent } from './sin-autorizacion/sin-autorizacion.component';
import { UtilidadesModule } from './utilidades/utilidades.module';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    ListadoClientesComponent,
    VerClienteComponent,
    SinAutorizacionComponent
  ],
  imports: [
    BrowserModule,
    rutas_app,
    UtilidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

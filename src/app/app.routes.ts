import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { ListadoClientesComponent } from "./clientes/listado-clientes/listado-clientes.component";
import { VerClienteComponent } from "./clientes/ver-cliente/ver-cliente.component";
import { ClientesService } from "./servicios/clientes.service";
import { AutenticacionGuard } from "./autenticacion.guard";
import { SinAutorizacionComponent } from "./sin-autorizacion/sin-autorizacion.component";

const clientesService = new ClientesService()

const rutas: Routes = [
    {path: '', component: InicioComponent},
    // {path: 'inicio', component: InicioComponent},
    // {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'sin-autorizacion', component: SinAutorizacionComponent},
    {path: 'listado-clientes', component: ListadoClientesComponent, 
     data: {titulo: clientesService.getTitulo()}},
    {path: 'ver-cliente/:_id', component: VerClienteComponent, canActivate: [AutenticacionGuard]},
    {path: 'recursos-humanos', loadChildren: './rrhh/rrhh.module#RrhhModule'},
    {path: '**', component: InicioComponent} // siempre el último
  ];

export const rutas_app = RouterModule.forRoot(rutas);
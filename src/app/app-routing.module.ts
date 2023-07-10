import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './pages/clientes/lista-clientes/lista-clientes.component';
import { NuevoClienteComponent } from './pages/clientes/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './pages/clientes/editar-cliente/editar-cliente.component';
import { RegistroComponent } from './pages/staff/registro/registro.component';
import { LoginComponent } from './pages/staff/login/login.component';

const routes: Routes = [
  { path: '', component: ListaClientesComponent},
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'clientes/nuevo', component: NuevoClienteComponent },
  { path: 'clientes/editar/:clienteId', component: EditarClienteComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/clientes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

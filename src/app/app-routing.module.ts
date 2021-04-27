import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiEExemplosComponent } from './api-e-exemplos/api-e-exemplos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AtualizarComponent } from './user/atualizar/atualizar.component';
import { ListaUsuariosComponent } from './user/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  { path: 'main', component: NavigationComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'api-e-exemplos',
          component: ApiEExemplosComponent
        },
        {
          path: 'listagem', component: ListaUsuariosComponent
        },
        {
          path: 'editar', component: AtualizarComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

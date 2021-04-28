import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiEExemplosComponent } from './api-e-exemplos/api-e-exemplos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AtualizarComponent } from './user/atualizar/atualizar.component';
import { CriarComponent } from './user/criar/criar.component';
import { DetalheUsuarioComponent } from './user/detalhe-usuario/detalhe-usuario.component';
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
          path: 'listagem', 
          component: ListaUsuariosComponent
        },
        {
          path: 'editar/:id', 
          component: AtualizarComponent
        },
        {
          path: 'criar', 
          component: CriarComponent
        },
        {
          path: 'detalhe-usuario/:id', 
          component: DetalheUsuarioComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

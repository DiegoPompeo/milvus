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
  {
    path: 'main', component: NavigationComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full',
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'api-e-exemplos',
        component: ApiEExemplosComponent,
        data: {
          breadcrumb: null
        },
      },
      {
        path: 'criar',
        component: CriarComponent,
        data: {
          breadcrumb: "Cadastro"
        },
      },
      {
        path: 'listagem',
        data: {
          breadcrumb: 'Lista'
        },
        children: [
          {
          path: '', component: ListaUsuariosComponent,
          data: {
            breadcrumb: null
          },
        },
        {
          path: 'editar/:id',
          component: AtualizarComponent,
          data: {
            breadcrumb: "Atualizar"
          },
        },
        {
          path: 'detalhe-usuario/:id',
          component: DetalheUsuarioComponent,
          data: {
            breadcrumb: "Detalhes"
          },
        }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


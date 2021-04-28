// MÓDULO PADRÃO PARA IMPORTAR TODOS OS COMPONENTES USADOS DO ANGULAR MATERIAL
// AQUI DEVE-SE CENTRALIZAR TUDO QUE É USADO DO ANGULAR MATERIAL

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatTabsModule,
      MatSlideToggleModule,
      MatRadioModule,
      MatTableModule,
      MatExpansionModule,
      MatMenuModule,
      MatSelectModule,
      MatDialogModule,
      MatButtonToggleModule,
      MatCardModule,
      MatGridListModule,
      
    ],
  exports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatTabsModule,
      MatSlideToggleModule,
      MatRadioModule,
      MatTableModule,
      MatExpansionModule,
      MatMenuModule,
      MatSelectModule,
      MatDialogModule,
      MatButtonToggleModule,
      MatCardModule,
      MatGridListModule,
    ]
})
export class CustomMaterialModule { }

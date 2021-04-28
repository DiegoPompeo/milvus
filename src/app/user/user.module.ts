import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../shared/material.module';
import { CriarComponent } from './criar/criar.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';

import { BreadcrumbModule } from "xng-breadcrumb";

@NgModule({
  declarations: [CriarComponent, ListaUsuariosComponent, AtualizarComponent, DetalheUsuarioComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }

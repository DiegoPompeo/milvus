import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AtualizarComponent } from '../atualizar/atualizar.component';
import { DetalheUsuarioComponent } from '../detalhe-usuario/detalhe-usuario.component';
import { CrudService } from '../service/crud.service';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['name', 'cpf', 'email', 'status', 'home', 'phone', 'actions'];

  dataSource: any;

  user: any;

  dropdownVisible: boolean = false;

  
  @ViewChild(AtualizarComponent) atualizar: AtualizarComponent;

  tile: Tile[] = [
    { cols: 3, rows: 1, text: "Listagem de Clientes" },
    { cols: 1, rows: 1, text: "Adicionar" },
  ];

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.crudService.getUsers().subscribe(
      data => {
        this.dataSource = data;
      }
    )
  }

  detalheUsuario(id: any) {
    this.router.navigate(['main/listagem/detalhe-usuario', id]);
  }

  editarUsuario(id: any) {
    this.router.navigate(['main/listagem/editar', id]);
  }

  goToCriar(){
    this.router.navigateByUrl("main/criar")
  }

  deletarUsuario(id: any){
    this.crudService.deleteUser(id).subscribe();
    this.getUsers();
  }

}

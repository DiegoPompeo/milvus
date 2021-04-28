import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  
  lista: any;

  constructor(private listaService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.listaService.getUsers().subscribe(
      data => {
        this.lista = data;
      }
    )
  }

  detalheUsuario(id: any){
    this.router.navigate(['main/detalhe-usuario', id]);
  }

  editarUsuario(id: any){
    this.router.navigate(['main/editar', id]);
  }

}

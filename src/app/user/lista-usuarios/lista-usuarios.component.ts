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
  
  userEdit: any;

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

  editar(id: any){
    this.listaService.getUser(id).subscribe(
      data => {
        this.userEdit = data;
      }
    );
    this.router.navigateByUrl("user/editar");
  
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  public userId;

  usuario: any;

  listaUsuario: any;

  constructor(private route: ActivatedRoute, private service: CrudService, private router: Router) {
    this.route.params.subscribe(params => this.userId = params['id'])
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    this.service.getUsers().subscribe(
      data => {
        this.listaUsuario = data;

        this.listaUsuario.forEach(
          element => {
            if (element._id = this.userId) {
              this.usuario = element;
            }
          });
      }
    );
  }

  detalheUsuario(id: any) {
    this.router.navigate(['main/listagem/detalhe-usuario', id]);
  }

  editarUsuario(id: any) {
    this.router.navigate(['main/listagem/editar', id]);
  }
}

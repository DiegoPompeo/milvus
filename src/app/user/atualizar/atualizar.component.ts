import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {

  public userId;

  usuario: any;

  listaUsuario: any;

  constructor(private route: ActivatedRoute, private service: CrudService) {
    this.route.params.subscribe(params => this.userId = params['id'])
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    this.service.getUsers().subscribe(
      data => {
        this.listaUsuario = data;      

        this.listaUsuario.forEach(element => {
          if (element._id = this.userId) {
            this.usuario = element;
          }
        });
      }
    );
  }

}

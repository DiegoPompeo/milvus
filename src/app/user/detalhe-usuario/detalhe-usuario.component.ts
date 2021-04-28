import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {

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
        console.log(this.usuario);
      }
    );
  }
}

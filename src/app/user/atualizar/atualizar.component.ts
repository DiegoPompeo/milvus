import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {

  public userId;

  usuario: any;

  nome: string;

  listaUsuario: any;

  constructor(private activateRoute: ActivatedRoute, 
    private service: CrudService, 
    private router: Router,
    private toastr: ToastrService) {
    this.activateRoute.params.subscribe(params => this.userId = params['id'])
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
            this.nome = this.usuario.nome;
          }
        });
      }
    );
  }

  editarUsuario(id: any) {
    this.router.navigate(['main/listagem/editar', id]);
  }

  voltar() {
    this.router.navigateByUrl("/main/listagem");
  }

  salvar(usuario: any){
    this.service.updateUser(usuario._id, usuario).subscribe(
      data => {
        this.toastr.success("Atualizado com sucesso");
      }
    )
  }

}

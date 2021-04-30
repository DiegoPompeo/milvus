import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {

  senha: string;


  registroFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private crudService: CrudService,
    private toastr: ToastrService
  ) { 
   }

  ngOnInit() {

    this.registroFormGroup = this.formBuilder.group({
      cpf_cnpj: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      celular: [null, [Validators.required]],     
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]],
    });
  }

  submit() {
    this.crudService.createUser(this.registroFormGroup.value).subscribe(
      data => {
        this.toastr.success(data.nome + " cadastrado com sucesso");
      }
    )
  }

  voltar() {
    this.router.navigateByUrl("/main/listagem");
  }


}

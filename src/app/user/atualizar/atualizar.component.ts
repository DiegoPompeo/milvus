import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {

  @Input()
  user: any;

  constructor() { }

  ngOnInit(): void {
  }

}

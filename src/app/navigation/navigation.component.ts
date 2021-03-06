import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AtualizarComponent } from '../user/atualizar/atualizar.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, AfterViewInit {

  dropdownVisible: boolean = false;
  @ViewChild('dashboard') dashboard: ElementRef<HTMLAnchorElement>;
  @ViewChild('api') api: ElementRef<HTMLAnchorElement>;
  @ViewChild('listagem') listagem: ElementRef<HTMLAnchorElement>;

  constructor(
    private route: Router,
    ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setPage(this.route.url);
  }

  setPage(item: string): void {
    switch(item) {
      case '/main/dashboard':
        this.dashboard['_element'].nativeElement.classList.add('actual-page');
        this.api['_element'].nativeElement.classList.remove('actual-page');
        this.listagem['_element'].nativeElement.classList.remove('actual-page');
        break;
      case '/main/api-e-exemplos':
        this.dashboard['_element'].nativeElement.classList.remove('actual-page');
        this.api['_element'].nativeElement.classList.add('actual-page');
        this.listagem['_element'].nativeElement.classList.remove('actual-page');
        break;
      case '/main/listagem':
        this.dashboard['_element'].nativeElement.classList.remove('actual-page');
        this.api['_element'].nativeElement.classList.remove('actual-page');
        this.listagem['_element'].nativeElement.classList.add('actual-page');
        break;
    }
  }

}

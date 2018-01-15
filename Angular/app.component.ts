import { Component } from '@angular/core';


import {MenuItem} from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from './services/loginService/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  mostrarMenu: boolean = false;
  items: MenuItem[];
  constructor(private loginService:LoginService,private router:Router){}
  ngOnInit() { 
    this.router.navigate(['/login']);
    this.items = [
      {label: 'Aluno', icon: 'fa fa-user', routerLink:['/buscarAluno']},
      {label: 'Disciplina', icon: 'fa fa-graduation-cap', routerLink:['/buscarDisciplina']},
      {label: 'Turma',icon: 'fa-book', routerLink:['/buscarTurma']},
      {label: 'Avaliação', icon: 'fa fa-file-text-o', routerLink:['/buscarAvaliacao']}
  ];

  this.loginService.mostrarMenuEmitter.subscribe(
    mostrar=> this.mostrarMenu = mostrar
  );
  }

  sair(): void{
    this.loginService.sair();
  }

}

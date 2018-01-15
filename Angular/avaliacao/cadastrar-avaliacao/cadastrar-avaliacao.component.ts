import { AlunoService } from './../../services/alunoService/aluno.service';
import { Turma } from './../../modelo/turma';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';
import { TurmaService } from '../../services/turmaService/turma.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-cadastrar-avaliacao',
  templateUrl: './cadastrar-avaliacao.component.html',
  styleUrls: ['./cadastrar-avaliacao.component.css']
})
export class CadastrarAvaliacaoComponent implements OnInit {

  turma:Turma[] = new Array();

  msgs: Message[] = [];  

  constructor(private turmaService:TurmaService,
              private router:Router,
              private messageService: MessageService,
              private alunoService:AlunoService,
              private _location: Location) { }

  ngOnInit() {
    
    this.turmaService.getTurmas().subscribe(res => this.turma =res); 
   

  }

  selecionar(id:number):void{
    this.router.navigate(['/carregandoTurmas',id]);
  }

  Voltar():void{
    this._location.back();
  }

}

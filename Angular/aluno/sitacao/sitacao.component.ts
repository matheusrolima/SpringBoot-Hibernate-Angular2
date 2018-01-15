import { Aluno } from './../../modelo/aluno';
import { Component, OnInit } from '@angular/core';
import { Turma } from '../../modelo/turma';
import { Avaliacao } from '../../modelo/avaliacao';
import { AlunoService } from '../../services/alunoService/aluno.service';
import { TurmaService } from '../../services/turmaService/turma.service';
import { AvaliacaoService } from '../../services/avaliacao/avaliacao.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sitacao',
  templateUrl: './sitacao.component.html',
  styleUrls: ['./sitacao.component.css']
})
export class SitacaoComponent implements OnInit {
  
  data:string;
  titulo:string;
  resultado:string;
  aluno:Aluno = new Aluno();
  turma:Turma = new Turma();

  avaliacao:Avaliacao = new Avaliacao();

  constructor(private activatedRoute: ActivatedRoute,
              private alunoService:AlunoService,
              private turmaService:TurmaService,
              private avaliacaoService:AvaliacaoService,
              private messageService: MessageService,
              private _location: Location) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(parametro=>{ 

      this.titulo = "Situação do Aluno";
        
        this.avaliacaoService.getById(Number(parametro["id"])).subscribe(res => {this.avaliacao = res
          var aux = this.avaliacao.nota1;

          if((this.avaliacao.nota1 + this.avaliacao.nota2)/2 >= 6.0 && this.avaliacao.frequencia > 80.0)
          {
            this.resultado = "Aprovado";
          }else{
            this.resultado = "Reprovado";
          }
        });
        
        this.alunoService.getAlunoId(Number(parametro["alunoId"])).subscribe(res => {
          this.aluno = res; 
          this.avaliacao.aluno = res;
          
          this.aluno = res; 
          this.avaliacao.aluno = res;
          this.data = this.aluno.dtNasc; 

          const [primeiro,secundo,terceiro] = this.data.split('-');

          this.aluno.dtNasc = terceiro + "/"+ secundo + "/" + primeiro;
        
        });
        this.turmaService.getTurmaId(Number(parametro["turmaId"])).subscribe(res => {this.turma = res;
           this.avaliacao.turma = res
        });
  
      });

  }

  Voltar():void{
    this._location.back();
  }

}

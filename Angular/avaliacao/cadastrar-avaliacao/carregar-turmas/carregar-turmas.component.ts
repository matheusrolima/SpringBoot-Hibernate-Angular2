import { AlunoService } from './../../../services/alunoService/aluno.service';
import { Turma } from './../../../modelo/turma';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { TurmaService } from '../../../services/turmaService/turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacaoService } from '../../../services/avaliacao/avaliacao.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-carregar-turmas',
  templateUrl: './carregar-turmas.component.html',
  styleUrls: ['./carregar-turmas.component.css']
})
export class CarregarTurmasComponent implements OnInit {


  titulo: string;

  private turmas: Turma = new Turma();

  private alunos:SelectItem[] = []; 

  constructor(private alunoService:AlunoService,
              private turmaService:TurmaService,
              private activatedRoute: ActivatedRoute,
              private router: Router, 
              private avaliacaoService:AvaliacaoService,
              private _location: Location) { }

  ngOnInit() {
    this.alunoService.getAlunos().subscribe(res => this.alunos = res);
    
    this.activatedRoute.params.subscribe(parametro=>{
 
          this.titulo = "Selecione um aluno";
          this.turmaService.getTurmaId(Number(parametro["id"])).subscribe(res => this.turmas = res);
        
      }); 

   
  }

  selecionar(alunoId:number, turmaId:number)
  {

    this.router.navigate(['/inserirAvaliacao',alunoId,turmaId]);
  }

  Voltar():void{

    this._location.back();
  }

} 

import { Disciplina } from './../../../modelo/disciplina';
import { AvaliacaoService } from './../../../services/avaliacao/avaliacao.service';
import { Avaliacao } from './../../../modelo/avaliacao';
import { TurmaService } from './../../../services/turmaService/turma.service';
import { Turma } from './../../../modelo/turma';
import { Aluno } from './../../../modelo/aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../../services/alunoService/aluno.service';
import { MessageService } from 'primeng/components/common/messageservice';
import {Location} from '@angular/common';

@Component({
  selector: 'app-inserir-avaliacao',
  templateUrl: './inserir-avaliacao.component.html',
  styleUrls: ['./inserir-avaliacao.component.css']
})
export class InserirAvaliacaoComponent implements OnInit {
  
  titulo:string;
  data:string;
  aluno:Aluno = new Aluno(); 
  turma:Turma = new Turma();

  avaliacao:Avaliacao = new Avaliacao();

  constructor(private activatedRoute: ActivatedRoute,
              private alunoService:AlunoService,
              private turmaService:TurmaService,
              private avaliacaoService:AvaliacaoService,
              private messageService: MessageService,
              private _location:Location) { }

  ngOnInit() { 


    this.activatedRoute.params.subscribe(parametro=>{
 
      if(parametro["id"] == undefined){

        this.titulo = "Novo Cadastro de Avaliação";
        this.alunoService.getAlunoId(Number(parametro["alunoId"])).subscribe(res => {
          
          this.aluno = res; 
          this.avaliacao.aluno = res;
          this.data = this.aluno.dtNasc;

          const [primeiro,secundo,terceiro] = this.data.split('-');

          this.aluno.dtNasc = terceiro + "/"+ secundo + "/" + primeiro;
         
        });
        this.turmaService.getTurmaId(Number(parametro["turmaId"])).subscribe(res => {
          this.turma = res;
           this.avaliacao.turma = res
          });
        
      }
      else{

        this.titulo = "Editar Cadastro de Avaliação";
        
        this.avaliacaoService.getById(Number(parametro["id"])).subscribe(res => this.avaliacao = res);
        
        this.alunoService.getAlunoId(Number(parametro["alunoId"])).subscribe(res => {
          this.aluno = res; 
          this.avaliacao.aluno = res;
        
          this.aluno = res; 
          this.avaliacao.aluno = res;
          this.data = this.aluno.dtNasc; 

          const [primeiro,secundo,terceiro] = this.data.split('-');

          this.aluno.dtNasc = terceiro + "/"+ secundo + "/" + primeiro;
        });
        this.turmaService.getTurmaId(Number(parametro["turmaId"])).subscribe(res => {this.turma = res, this.avaliacao.turma = res});
      }


    });  

    
      
  }

  CadastrarAvaliacao():void{
    if(this.avaliacao.id == undefined)
    {
      
        this.avaliacaoService.getByAlunoAndTurma(this.aluno.id, this.turma.id).subscribe(res =>{
        
        this.messageService.add({severity:'error', summary:'Já existe uma avaliação para esse aluno.'});

      },
      (erro) =>{
          this.data = this.aluno.dtNasc;
          const [primeiro,secundo,terceiro] = this.data.split('/');
        
          this.aluno.dtNasc = terceiro + "-" + secundo + "-" + primeiro;
          
          this.avaliacaoService.addAvaliacao(this.avaliacao).subscribe(response => {
          
          
          this.messageService.add({severity:'success', summary:'Avaliação adicionada'});

          },
          (erro) => {                                           
          
          });
        
      });
          
     
           
    }else{
                
      this.avaliacaoService.atualizarDados(this.avaliacao).subscribe(response => {
        this.messageService.add({severity:'success', summary:'Avaliação atualizada'});        
      },
      (erro) => {                                           
        this.messageService.add({severity:'error', summary:'Já existe uma avaliação para esse aluno.'});
      });

    }           
              
  }

  Limpar():void{

    this.avaliacao = new Avaliacao();
    this.turma = new Turma();
  }

  Voltar():void{

    this._location.back();
  }

}

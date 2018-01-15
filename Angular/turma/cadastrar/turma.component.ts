
import { Message } from 'primeng/primeng'; 
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MessageService } from 'primeng/components/common/messageservice';
import { Turma } from '../../modelo/turma';
import { TurmaService } from '../../services/turmaService/turma.service';
import { DisciplinaService } from '../../services/disciplinaService/disciplina.service';
import { AlunoService } from '../../services/alunoService/aluno.service';
import { Disciplina } from '../../modelo/disciplina';
import { Aluno } from '../../modelo/aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaDisciplina } from '../../modelo/turma.disciplina';
import {Location} from '@angular/common';


@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

   titulo: string;

   msgs: Message[] = []; 
   
   private turmaDisciplina:TurmaDisciplina = new TurmaDisciplina();
   
   private disciplinas:SelectItem[] = [];
   
   private disciplina:Disciplina = new Disciplina();
   
   private alunos:SelectItem[] = [];  
   
   private aluno:Aluno = new Aluno();
   
   private turma: Turma = new Turma();



  constructor(private disciplinaService:DisciplinaService,
              private turmaService:TurmaService,
              private alunoService:AlunoService,
              private messageService: MessageService, 
              private activatedRoute: ActivatedRoute,
              private router:Router,
              private _location: Location) { }

  
  ngOnInit() { 
    
    this.disciplinaService.getDisciplinas().subscribe(res => this.disciplinas = res);
    this.alunoService.getAlunos().subscribe(res => this.alunos = res);

    this.activatedRoute.params.subscribe(parametro=>{
 
    if(parametro["id"] == undefined){

        this.titulo = "Novo Cadastro de Turma"; 
      }
      else{

        this.titulo = "Editar Cadastro de Turma";
        this.turmaService.getTurmaId(Number(parametro["id"])).subscribe(res => this.turma = res);
      }


    }); 

  }

  adicionar(): void{
    var existe = this.turma.alunos.filter((item) => item.cpf == this.aluno.cpf).length > 0; 
    if(!existe){      
      this.turma.alunos = this.turma.alunos.concat(this.aluno);
      this.aluno = new Aluno();
      this.messageService.add({severity:'success', summary:'Aluno adicionado'});
    } else{
      this.messageService.add({severity:'error', summary:'Aluno já foi adicionado'});
    }    
  }
   excluir(ri): void{

     this.messageService.add({severity:'info', summary:'Aluno removido'});
     this.turma.alunos.splice(ri,1);
     this.turma.alunos = this.turma.alunos.concat([]); 
   }

  CadastrarTurma(): void{
    if(this.turma.id == undefined) 
    {
        this.turmaService.addTurma(this.turma).subscribe(response => {
          this.messageService.add({severity:'success', summary:'Turma adicionada'});
                
        },
        (erro) => {                                           
          this.messageService.add({severity:'warn',  summary:'Aluno já está matriculado em outra turma.'});
        });

        
    }else{
      this.turmaService.atualizarTurma(this.turma).subscribe(response => {
        this.messageService.add({severity:'success', summary:'Turma atualizada'}); 

      },
      (erro) => {                                           
        this.messageService.add({severity:'warn', summary:'Aluno já está matriculado em outra turma.'});
      });

      
    }
    this.turma = new Turma();
    this.aluno = new Aluno();
    this.turmaDisciplina = new TurmaDisciplina();
    this.disciplina = new Disciplina();
  }

  Limpar():void{
    this.turma = new Turma();
    this.aluno = new Aluno();
    this.turmaDisciplina = new TurmaDisciplina();
    this.disciplina = new Disciplina();
  }

  editar(id:number, turmaId:number):void{

    
    this.router.navigate(['/notasFrequencia',id,turmaId]);

  }

  Voltar():void{
    this._location.back();
  }
}

import { Disciplina } from './../../modelo/disciplina';
import { Message } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaService } from '../../services/disciplinaService/disciplina.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  titulo: string;
  msgs: Message[] = []; 
  private disciplina:Disciplina = new Disciplina();

  constructor(private disciplinaService:DisciplinaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private _location: Location) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(parametro=>{
 
      if(parametro["id"] == undefined){

        this.titulo = "Novo Cadastro de Disciplina";
      }
      else{

        this.titulo = "Editar Cadastro de Disciplina";
        this.disciplinaService.getDisciplinaId(Number(parametro["id"])).subscribe(res => this.disciplina = res);
      }


    });   
  }

  CadastrarDisciplina(): void{
    
    if(this.disciplina.nome == null || this.disciplina.cargaHoraria == null || this.disciplina.codigo == null)
    {
      if(this.disciplina.nome == null )
      {
        this.messageService.add({severity:'error', summary:'Campo nome vazio !'});
      }
      if(this.disciplina.cargaHoraria == null )
      {
        this.messageService.add({severity:'error', summary:'Campo carga horaria vazio !'});
      }
      if(this.disciplina.codigo == null )
      {
        this.messageService.add({severity:'error', summary:'Campo código vazio !'});
      }
    }else{
      if(this.disciplina.id == undefined)
      {
        this.disciplinaService.addDisciplina(this.disciplina).subscribe(response => {
          this.messageService.add({severity:'success', summary:'Disciplina adicionada'}); 
          
        },
          (erro) => {                                           
            this.messageService.add({severity:'error', summary:'Já existe disciplina com esse código.'});
          });
  
          
      }else{
        this.disciplinaService.atualizarDisciplina(this.disciplina).subscribe(response => {
          this.messageService.add({severity:'success', summary:'Disciplina atualizada'});    
        },
        (erro) => {                                           
          this.messageService.add({severity:'error', summary:'Já existe disciplina com esse código.'});
        });
  
       
      }

    }
    
    this.disciplina = new Disciplina();
  }

  Limpar():void{
    this.disciplina = new Disciplina();
  }

  Voltar():void{
    this._location.back();
  }

}

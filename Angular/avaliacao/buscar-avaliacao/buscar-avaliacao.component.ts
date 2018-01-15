import { TurmaService } from './../../services/turmaService/turma.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';
import { Avaliacao } from '../../modelo/avaliacao';
import { AvaliacaoService } from './../../services/avaliacao/avaliacao.service';
import { Turma } from '../../modelo/turma';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar-avaliacao',
  templateUrl: './buscar-avaliacao.component.html',
  styleUrls: ['./buscar-avaliacao.component.css']
})
export class BuscarAvaliacaoComponent implements OnInit {


  msgs: Message[] = []; 

  avaliacoes:Avaliacao[] = new Array();
  
  avaliacao:Avaliacao = new Avaliacao(); 

  turma:Turma = new Turma();

  constructor(private avaliacaoService:AvaliacaoService,
              private messageService: MessageService,
              private router: Router,
              private turmaService:TurmaService) { }

  ngOnInit() {

    this.avaliacaoService.getAvaliacoes().subscribe(res=> {this.avaliacoes = res, this.avaliacao = res});
    
  }

  novo():void{

      this.router.navigate(['/avaliacao']);

  }

  editar(id:number, alunoId:number, turmaId:number)
  {
    this.router.navigate(['/editarAvaliacao',id,alunoId,turmaId]);
  }

  excluir(id:number)
  {
    if(confirm("Deseja realmente excluir esse registro?")){
      this.avaliacaoService.excluirAvaliacao(id).subscribe(response => {
          this.messageService.add({severity:'success', summary:'Avaliação excluida !'});
          this.ngOnInit();
        },
        (erro) => {                    
          this.messageService.add({severity:'warn', summary:'Aluno está matriculado !'}); 
        });        
      
    }
  }

  situacao(id:number, alunoId:number, turmaId:number):void{
    this.router.navigate(['/situacao',id,alunoId,turmaId]);
  }
}

import { SelectItem } from 'primeng/components/common/selectitem';
import { AlunoService } from './../../services/alunoService/aluno.service';
import { Aluno } from './../../modelo/aluno';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscarAluno.component.html', 
  styleUrls: ['./buscarAluno.component.css']
})
export class BuscarComponent implements OnInit { 
 
  msgs: Message[] = []; 

  aluno: Aluno[]  = new Array();

  alunos:SelectItem[] = [];
  
  constructor(private alunoService:AlunoService,private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {

    this.alunoService.getAllAlunos().subscribe(res => this.aluno = res);
    
  }

  novo():void{

    this.router.navigate(['/aluno']);
  }
  editar(id:number): void{
    this.router.navigate(['/aluno',id]);
  }

  excluir(id): void{
    if(confirm("Deseja realmente excluir esse registro?")){
      this.alunoService.excluirAluno(id).subscribe(response => {
          this.messageService.add({severity:'success', summary:'Aluno excluido !'});
          this.ngOnInit();
        },
        (erro) => {                    
          this.messageService.add({severity:'warn', summary:'Aluno está matriculado !'}); 
        });        
      
    }
    
    
  }
}

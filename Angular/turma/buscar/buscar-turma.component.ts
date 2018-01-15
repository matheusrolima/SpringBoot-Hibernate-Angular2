import { Component, OnInit } from '@angular/core'; 
import { Turma } from '../../modelo/turma';
import { TurmaService } from '../../services/turmaService/turma.service'; 
import {Router} from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-buscar-turma',
  templateUrl: './buscar-turma.component.html',
  styleUrls: ['./buscar-turma.component.css']
})
export class BuscarTurmaComponent implements OnInit {

  turma:Turma[] = new Array(); 
  msgs: Message[] = []; 

  constructor(private turmaService:TurmaService,private router:Router,
              private messageService: MessageService) { }

  ngOnInit() {
    
    this.turmaService.getTurmas().subscribe(res => this.turma =res); 

  }

  novo():void{
    this.router.navigate(['/turma']);
  }
  editar(id):void{
    this.router.navigate(['/turma',id]);
  }

  excluir(codigo:string)
  {
    if(confirm("Deseja realmente excluir esse registro?")){
      this.turmaService.excluirTurma(codigo).subscribe(response => {
          this.messageService.add({severity:'success', summary:'Turma excluida !'});
          this.ngOnInit();
        },
        (erro) => {                    
             alert(erro); 
        });        
        
      }
    
  }

}

import { Component, OnInit } from '@angular/core'; 
import { Disciplina } from '../../modelo/disciplina';
import { DisciplinaService } from '../../services/disciplinaService/disciplina.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-buscar-disciplina',
  templateUrl: './buscar-disciplina.component.html', 
  styleUrls: ['./buscar-disciplina.component.css']
})
export class BuscarDisciplinaComponent implements OnInit {

  disciplina: Disciplina[] = new Array(); 
  msgs: Message[] = []; 

  constructor(private disciplinaService:DisciplinaService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.disciplinaService.getAllDisciplinas().subscribe(res => this.disciplina = res);
  }

  novo(): void{  

    this.router.navigate(['/disciplina']);
  }
  editar(id:number): void{
    this.router.navigate(['/disciplina',id]);
  }
  excluir(id ): void{
    
    if(confirm("Deseja realmente excluir esse registro?")){
      console.log(id);      
      this.disciplinaService.excluirDisciplina(id).subscribe(response => {
          this.messageService.add({severity:'success', summary:'Disciplina excluida !'});
          this.ngOnInit();
        },
        (erro) => {                    
          this.messageService.add({severity:'warn', summary:'Disciplina possui turma!'});

        });        
        
      }
    
  }
}

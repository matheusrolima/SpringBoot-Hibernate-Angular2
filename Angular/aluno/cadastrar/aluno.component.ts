import { Aluno } from './../../modelo/aluno';  
import { Message } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { Observable } from 'rxjs/Observable';
import { AlunoService } from '../../services/alunoService/aluno.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  titulo: string;
  msgs: Message[] = []; 
  private aluno:Aluno = new Aluno(); 
  data:string;

  constructor(private alunoService:AlunoService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private _location: Location) { } 

  ngOnInit():void {
    this.activatedRoute.params.subscribe(parametro=>{
 
      if(parametro["id"] == undefined){

        this.titulo = "Novo Cadastro de Aluno";
      }
      else{

        this.titulo = "Editar Cadastro de Aluno";
        this.alunoService.getAlunoId(Number(parametro["id"])).subscribe(res => {this.aluno = res;
          this.data = this.aluno.dtNasc;
          
          const [primeiro,secundo,terceiro] = this.data.split('-');

          this.aluno.dtNasc = terceiro + "/"+ secundo + "/" + primeiro;
        });
      }


    });   

  }
  


  CadastrarAluno(): void{
     
      if(this.aluno.nome == null || this.aluno.cpf == null || this.aluno.sexo == null || this.aluno.dtNasc == null || this.aluno.cidade == null){
                if(this.aluno.nome == null)
                {
                  this.messageService.add({severity:'error', summary:'Campo nome vazio !'});
                }
                if(this.aluno.cpf == null)
                {
                  this.messageService.add({severity:'error', summary:'Campo cpf vazio !'});
                }
                if(this.aluno.sexo == null)
                {
                  this.messageService.add({severity:'error', summary:'Campo sexo vazio !'});
                }
                if(this.aluno.dtNasc == null)
                {
                  this.messageService.add({severity:'error', summary:'Campo data de nascimento vazia !'});
                }
                if(this.aluno.cidade == null)
                {
                  this.messageService.add({severity:'error', summary:'Campo cidade vazio !'});
                }
                
      }else{
              if(this.aluno.id == undefined)
              {
                this.data = this.aluno.dtNasc;
                const [primeiro,secundo,terceiro] = this.data.split('/');
                
                this.aluno.dtNasc = terceiro + "-" + secundo + "-" + primeiro;
              
                if(secundo > '12' || terceiro > '2017' || primeiro < '1' || primeiro > '31') {
                  alert ("Data incorreta !");
                }else{
                  this.alunoService.addAluno(this.aluno).subscribe(response => {
                    this.messageService.add({severity:'success', summary:'Aluno adicionado'});   
                  },
                  (erro) => {                                           
                    this.messageService.add({severity:'error', summary:'Já existe um aluno com esse CPF.'}); 
                  });
                }
            
                }else{
                    
                    this.data = this.aluno.dtNasc;
                    
                    const [primeiro,secundo,terceiro] = this.data.split('/');
                    
                    this.aluno.dtNasc = terceiro + "-" + secundo + "-" + primeiro;
                    if(secundo > '12' || terceiro > '2017' || primeiro < '1' || primeiro > '31') {
                    alert ("Data incorreta !")
                    }
                    else{
                      this.alunoService.atualizarAluno(this.aluno).subscribe(response => {
                      this.messageService.add({severity:'success', summary:'Aluno atualizado'});        
                      },
                      (erro) => {                                           
                        this.messageService.add({severity:'error', summary:'Já existe um aluno com esse CPF.'});
                      });
                    }
                  
                }
        }
      
      this.aluno = new Aluno();
  }

  Limpar():void{
    this.aluno = new Aluno();
  }

  Voltar():void{
    this._location.back();
  }

}

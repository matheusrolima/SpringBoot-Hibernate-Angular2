import { MessageService } from 'primeng/components/common/messageservice'; 
import { Md5 } from 'ts-md5/dist/md5';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/loginService/login.service';
import { Observable } from 'rxjs/Observable';
import { Message } from 'primeng/primeng';
import { window } from 'rxjs/operator/window';
import { Login } from '../modelo/login';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   msgs: Message[] = [];
   login:Login = new Login();
   login2:Login = new Login();

   errorMsg:string;
   
   mensagem:Message[];

  constructor(private loginService: LoginService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(){

    }

  onSubmit(): void{
        if(this.login.usuario == null)
        {
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Error Message', detail:'Usuário vazio !'});
        }else if(this.login.senha == null) 
        {
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Error Message', detail:'Senha vazia !'});
        }else{

          this.loginService.getUsuarioByNomeAndPassword(this.login).subscribe((res) => {
            
            this.login2 = res
          
            let hash = Md5.hashStr(this.login.senha);

            if(this.login.usuario ===  this.login2.usuario && hash === this.login2.senha)
            {
              this.loginService.realizarAutenticacao();
            }
            
          }, (resError) =>{
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Error', detail:'Usuário ou senha incorreto !'});
            this.loginService.negar();
          });          
          
      }      
        
        
  }

  limpar():void{
    this.login = new Login();
    
  }

}

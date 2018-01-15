


import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';


 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';
 
import {ConfigService} from '../config.service';
import { Login } from '../../modelo/login';
import { Router } from '@angular/router';
import { Response } from '_debugger';

@Injectable()
export class LoginService
{
    private baseUrlService:string = '';
    private headers:Headers;
    
    private options:RequestOptions;
    
    private usuarioAutenticado: boolean = false;

    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private http: Http, 
                private router: Router,
                private configService: ConfigService) { 
        
        this.baseUrlService = this.configService.getUrlService() + '';  
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
    
    getUsuarioByNomeAndPassword(login:Login)
    {   
       
        
        return this.http.post(this.baseUrlService + 'usuario/buscarUsuario',JSON.stringify(login),this.options)
        .map(res => res.json())
        .catch(this._errorHandler);
        
    }

    _errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server error");
    }

    realizarAutenticacao(){
        
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
    }
    negar(){
        this.usuarioAutenticado =false;
        this.mostrarMenuEmitter.emit(false);
    }
    usuarioEstaAutenticado(){
        return this.usuarioAutenticado;
        
    }

    sair(){
        this.router.navigate(['/login']);
        this.mostrarMenuEmitter.emit(false);
        
    }

}
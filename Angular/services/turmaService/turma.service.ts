import { Turma } from './../../modelo/turma';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {ConfigService} from '../config.service';

@Injectable()
export class TurmaService
{
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http: Http, private configService: ConfigService) { 
        this.baseUrlService = this.configService.getUrlService() + '';  
        
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }

    addTurma(turma:Turma){
        return this.http.post(this.baseUrlService + 'turma/cadastrarTurma', JSON.stringify(turma),this.options)
        .map(res => res.json());
    }

    getTurmaId(id:number){ 
    
        return this.http.get(this.baseUrlService + 'turma/buscarId/' + id).map(res => res.json());
    }

    getTurmas(){
        return this.http.get(this.baseUrlService + 'turma/turmas').map(res => res.json());
    }

    excluirTurma(codigo:string){
    
        return this.http.delete(this.baseUrlService + 'turma/deletar/' + codigo ).map(res => res.json());
    }
    atualizarTurma(turma:Turma){
    
        return this.http.put(this.baseUrlService + 'turma/update', JSON.stringify(turma),this.options)
        .map(res => res.json());
    }


}
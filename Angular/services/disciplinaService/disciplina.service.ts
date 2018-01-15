import { Disciplina } from './../../modelo/disciplina'; 

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
export class DisciplinaService
{
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http: Http, private configService: ConfigService) { 
        this.baseUrlService = this.configService.getUrlService() + '';  
        
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers }); 
    }

    addDisciplina(disciplina:Disciplina)
    {
        return this.http.post(this.baseUrlService + 'disciplina/cadastrarDisciplina', JSON.stringify(disciplina),this.options)
        .map(res => res.json());
    }


    getDisciplinas()
    {
        return this.http.get(this.baseUrlService + 'disciplina/disciplinas').map(res => res.json());
    }

    getAllDisciplinas()
    {
        return this.http.get(this.baseUrlService + 'disciplina/todasDisciplinas').map(res => res.json());
    }

    excluirDisciplina(id:number){
    
        return this.http.delete(this.baseUrlService + 'disciplina/deletar/' + id ).map(res => res.json());
    }
    getDisciplinaId(id:number){
    
        return this.http.get(this.baseUrlService + 'disciplina/buscarId/' + id).map(res => res.json());
    }
    atualizarDisciplina(disciplina:Disciplina){
    
        return this.http.put(this.baseUrlService + 'disciplina/update', JSON.stringify(disciplina),this.options)
        .map(res => res.json());
    }
   
}
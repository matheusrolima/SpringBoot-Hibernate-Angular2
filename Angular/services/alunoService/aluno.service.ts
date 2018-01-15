import { Aluno } from './../../modelo/aluno';

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
export class AlunoService
{
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http: Http, private configService: ConfigService) { 
        this.baseUrlService = this.configService.getUrlService() + '';  
        
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }

    addAluno(aluno: Aluno){ 
        
        return this.http.post(this.baseUrlService + 'aluno/cadastrarAluno', JSON.stringify(aluno),this.options)
        .map(res => res.json());
    }

    getAlunos(){   
        
        return this.http.get(this.baseUrlService + 'aluno/alunos').map(res => res.json());
    }
    getAllAlunos(){   
        
        return this.http.get(this.baseUrlService + 'aluno/todosAlunos').map(res => res.json());
    }
    getAlunoId(id:number){
    
            return this.http.get(this.baseUrlService + 'aluno/buscarId/' + id).map(res => res.json());
    }

    getAlunoCpf(cpf:string){
        
            return this.http.get(this.baseUrlService + '/buscarCpf/' + cpf).map(res => res.json());
    }

    getAlunoCidade(cidade:string){ 
        
            return this.http.get(this.baseUrlService + '/buscarCidade/' + cidade).map(res => res.json());
    }

    atualizarAluno(aluno:Aluno){
    
            return this.http.put(this.baseUrlService + 'aluno/update', JSON.stringify(aluno),this.options)
            .map(res => res.json());
    }

    excluirAluno(id:number){
    
            return this.http.delete(this.baseUrlService + 'aluno/deletar/' + id ).map(res => res.json());
    }
}
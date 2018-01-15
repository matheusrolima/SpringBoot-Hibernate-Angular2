import { Avaliacao } from '../../modelo/avaliacao';
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
export class AvaliacaoService{
   
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http: Http, private configService: ConfigService) { 
        this.baseUrlService = this.configService.getUrlService() + '';  
        
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
    addAvaliacao(avaliacao:Avaliacao){ 
        
        return this.http.post(this.baseUrlService + 'avaliacao/cadastrarAvaliacao', JSON.stringify(avaliacao),this.options)
        .map(res => res.json());
    }
    atualizarDados(avaliacao:Avaliacao){ 
    
        return this.http.put(this.baseUrlService + 'avaliacao/update', JSON.stringify(avaliacao),this.options)
        .map(res => res.json());
    }

    getById(id:number)
    {
        return this.http.get(this.baseUrlService + 'avaliacao/buscarId/' + id).map(res => res.json());
    }
    getAvaliacoes(){
        return this.http.get(this.baseUrlService + 'avaliacao/todasAvaliacoes').map(res => res.json());
    }

    excluirAvaliacao(id:number){
    
        return this.http.delete(this.baseUrlService + 'avaliacao/deletar/' + id ).map(res => res.json());
    }

    getByAlunoAndTurma(idAluno:number, idTurma:number){
        
        return this.http.get(this.baseUrlService + 'avaliacao/buscar/' + idAluno + "/" + idTurma).map(res => res.json());
    }
}
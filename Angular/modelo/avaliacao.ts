import { Disciplina } from './disciplina';
import { Turma } from './turma';
import { Aluno } from "./aluno";

export class Avaliacao{
    
    
    id:number;
    frequencia:number;
    nota1:number;
    nota2:number;

    turma:Turma;
    aluno:Aluno;

    constructor(){
        this.aluno = new Aluno();
        this.turma = new Turma();
    }
  
}
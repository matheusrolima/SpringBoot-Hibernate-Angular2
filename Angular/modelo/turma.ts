import { Aluno } from './aluno';
import { Disciplina } from './disciplina';

export class Turma{
    
    id:number;
    
    disciplina:Disciplina;
    
    periodo:string;
    
    codigo:string;

    alunos: Aluno[];

    constructor(){

        this.disciplina = new Disciplina();

        this.alunos = [];
    }

}
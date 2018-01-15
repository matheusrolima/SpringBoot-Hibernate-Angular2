import { Disciplina } from './disciplina';
import { TurmaService } from './../services/turmaService/turma.service';
import { Turma } from './turma';
export class TurmaDisciplina{

    disciplina:Disciplina;
    
    constructor(){

        this.disciplina = new Disciplina();
    }
}
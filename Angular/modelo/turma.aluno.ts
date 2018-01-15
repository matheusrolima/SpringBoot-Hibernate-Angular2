import { TurmaService } from './../services/turmaService/turma.service';
import { Aluno } from './aluno';
import { Turma } from './turma';

export class TurmaAluno{

    aluno: Aluno;

    constructor(){

        this.aluno = new Aluno();
    }
}
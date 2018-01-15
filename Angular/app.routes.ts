import { CadastrarAvaliacaoComponent } from './avaliacao/cadastrar-avaliacao/cadastrar-avaliacao.component';
import { BuscarAvaliacaoComponent } from './avaliacao/buscar-avaliacao/buscar-avaliacao.component';
import { BuscarDisciplinaComponent } from './disciplina/buscar-disciplina/buscar-disciplina.component';
import { BuscarComponent } from './aluno/buscar/buscarAluno.component';
import { AlunoComponent } from './aluno/cadastrar/aluno.component';
import { AppPage } from './../../e2e/app.po';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import {LoginComponent} from './login/login.component';
import { DisciplinaComponent } from './disciplina/cadastrar/disciplina.component';
import { TurmaComponent } from './turma/cadastrar/turma.component';
import { BuscarTurmaComponent } from './turma/buscar/buscar-turma.component';
import { CarregarTurmasComponent } from './avaliacao/cadastrar-avaliacao/carregar-turmas/carregar-turmas.component';
import { InserirAvaliacaoComponent } from './avaliacao/cadastrar-avaliacao/inserir-avaliacao/inserir-avaliacao.component';
import { SitacaoComponent } from './aluno/sitacao/sitacao.component';
 
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'aluno', component: AlunoComponent},
    { path: 'aluno/:id', component: AlunoComponent},
    { path: 'buscarAluno', component:BuscarComponent},
    { path: 'avaliacao', component:CadastrarAvaliacaoComponent},
    { path: 'buscarAvaliacao' , component:BuscarAvaliacaoComponent},
    { path: 'disciplina', component: DisciplinaComponent},
    { path: 'disciplina/:id', component: DisciplinaComponent},
    { path: 'buscarDisciplina', component: BuscarDisciplinaComponent},
    { path: 'turma', component: TurmaComponent},
    { path: 'turma/:id', component: TurmaComponent},
    { path: 'buscarTurma', component: BuscarTurmaComponent},
    { path: 'carregandoTurmas/:id', component: CarregarTurmasComponent},
    { path: 'inserirAvaliacao/:alunoId/:turmaId', component: InserirAvaliacaoComponent},
    { path: 'editarAvaliacao/:id/:alunoId/:turmaId', component: InserirAvaliacaoComponent},
    { path: 'situacao/:id/:alunoId/:turmaId', component: SitacaoComponent}
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
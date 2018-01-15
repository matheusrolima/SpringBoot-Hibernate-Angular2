import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { routing} from './app.routes';

import {ButtonModule, DropdownModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {TabMenuModule,MenuItem} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';



import { AlunoComponent } from './aluno/cadastrar/aluno.component';
import { BuscarComponent } from './aluno/buscar/buscarAluno.component';
import { DisciplinaComponent } from './disciplina/cadastrar/disciplina.component';
import { TurmaComponent } from './turma/cadastrar/turma.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { DisciplinaService } from './services/disciplinaService/disciplina.service';
import { LoginService } from './services/loginService/login.service';
import { AlunoService } from './services/alunoService/aluno.service';
import { ConfigService } from './services/config.service';
import { TurmaService } from './services/turmaService/turma.service';
import { AvaliacaoService } from './services/avaliacao/avaliacao.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/components/common/messageservice';
import { BuscarDisciplinaComponent } from './disciplina/buscar-disciplina/buscar-disciplina.component';
import { BuscarTurmaComponent } from './turma/buscar/buscar-turma.component';
import { BuscarAvaliacaoComponent } from './avaliacao/buscar-avaliacao/buscar-avaliacao.component';
import { CadastrarAvaliacaoComponent } from './avaliacao/cadastrar-avaliacao/cadastrar-avaliacao.component';
import { CarregarTurmasComponent } from './avaliacao/cadastrar-avaliacao/carregar-turmas/carregar-turmas.component';
import { InserirAvaliacaoComponent } from './avaliacao/cadastrar-avaliacao/inserir-avaliacao/inserir-avaliacao.component';
import { SitacaoComponent } from './aluno/sitacao/sitacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlunoComponent,
    DisciplinaComponent,
    TurmaComponent,
    BuscarComponent,
    BuscarDisciplinaComponent,
    BuscarTurmaComponent,
    BuscarAvaliacaoComponent,
    CadastrarAvaliacaoComponent,
    CarregarTurmasComponent,
    InserirAvaliacaoComponent,
    SitacaoComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpModule,
    FormsModule,
    InputTextModule,
    RouterModule,
    routing,
    TabMenuModule,
    InputMaskModule,
    RadioButtonModule,
    ListboxModule,
    AutoCompleteModule,
    DataTableModule,
    DropdownModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule,
    GrowlModule
  ],
  providers: [ConfigService, LoginService, AlunoService, DisciplinaService, TurmaService,MessageService, AvaliacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}


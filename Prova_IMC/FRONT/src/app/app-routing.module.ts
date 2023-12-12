import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarImcComponent } from './Pages/imc/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './Pages/imc/listar-imc/listar-imc.component';
import { CadastrarAlunoComponent } from './Pages/aluno/cadastrar-aluno/cadastrar-aluno.component';

const routes: Routes = [{
  path: "pages/aluno/cadastrar",
  component: CadastrarAlunoComponent,
},
{
  path: "pages/imc/cadastrar",
  component: CadastrarImcComponent,
},
{
  path: "pages/imc/cadastrar/:id",
  component: CadastrarImcComponent,
},
{
  path: "pages/imc/listar",
  component: ListarImcComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

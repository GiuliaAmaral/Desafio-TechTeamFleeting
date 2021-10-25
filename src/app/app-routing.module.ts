import { InicioComponent } from './paginas/painel/inicio/inicio.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { LoginComponent } from './paginas/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"",
  component: LoginComponent

},{
  path:"cadastro",
  component: CadastroComponent

},{
  path:"painel",
  component: InicioComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

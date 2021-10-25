import { BarraNavegacaoComponent } from './componentes/barra-navegacao/barra-navegacao.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { InicioComponent } from './paginas/painel/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

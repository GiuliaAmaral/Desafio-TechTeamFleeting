import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {


    if(localStorage.getItem("usuarioLogado")){
      this.router.navigate(['/painel']);
    }

  }

  async formSubimitLogar(event: any) {
    event.preventDefault();
    let dadosFormJson: any = {};
    let dadosForm = new FormData(event.target);
    dadosForm.forEach((valor, chave) => {
      dadosFormJson[chave] = valor;
    });

    let usuariosLocal = JSON.parse(atob(String(localStorage.getItem("usuarios"))));
    
    usuariosLocal = usuariosLocal.filter((usuario:any)=>{
      return usuario.email === dadosFormJson.email;
    });
    let usuario = usuariosLocal[0];

    if(usuario){

      if(usuario.senha === btoa(dadosFormJson.senha)){

        localStorage.setItem("usuarioLogado", usuario.nome);
        this.router.navigate(['/painel']);

      }else{
        alert("Erro: Sua senha ou e-mail está invalida!")
      }

    }else{
      alert("Erro: Sua senha ou e-mail está invalida!")
    }
    
    return;
  }

}

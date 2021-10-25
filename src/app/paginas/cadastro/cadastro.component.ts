import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem("usuarioLogado")) {
      this.router.navigate(['/painel']);
    }

  }

  async formSubimitCadastro(event: any) {
    event.preventDefault();
    let dadosFormJson: any = {};
    let dadosForm = new FormData(event.target);
    dadosForm.forEach((valor, chave) => {
      dadosFormJson[chave] = valor;
    });


    dadosFormJson.senha = btoa(dadosFormJson.senha);



    let usuarios: any = new Array();
    let usuariosLocal = JSON.parse(atob(String(localStorage.getItem("usuarios"))));
    
    let usuario = (usuariosLocal.filter((usuario: any) => {
      return usuario.email === dadosFormJson.email;
    }))[0];
    if (!usuario) {


      if (localStorage.getItem("usuarios")) {
        usuarios = usuariosLocal;
      }

      usuarios.push(dadosFormJson);

      localStorage.setItem("usuarios", btoa(JSON.stringify(usuarios)));

      alert("Conta criada com sucesso, agora faça o login!")
      this.router.navigate(['/']);
    } else {
      alert("Erro: Endereço de e-mail já utilizado!")
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    setInterval(() => {
      if (localStorage.getItem("usuarioLogado")) {
        $("#btnSair").removeClass("d-none");
      } else {
        $("#btnSair").addClass("d-none");
      }
    }, 1000);

  }

  sairConta() {
    localStorage.removeItem("usuarioLogado");
    alert("Você saiu da conta, faça o login novamente!")
    this.router.navigate(['/']);
  }

}

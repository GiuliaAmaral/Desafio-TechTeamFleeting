import { Component, OnInit } from '@angular/core';
import { ApiUniversidades } from "../../../api/universidades";
import { ApiPaises } from "../../../api/paises";
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  paises: any;
  universidades: any;

  constructor(private router: Router) { }


  async ngOnInit() {
    const shelf = this;

    if(!localStorage.getItem("usuarioLogado")){
      this.router.navigate(['/']);
    }

    try {
      this.paises = await ApiPaises.prototype.obter();
    } catch (error) {
      alert("Erro: Api de lista de paises não retornou como esperado, tente novamente mais tarde!");
    }


    $(document).ready(async function () {
      await $("#pais").val("Brazil");
      shelf.listarUniversidades();
    });

  }


  async listarUniversidades() {
    const pais = $("#pais").val();

    $('#tabelaUniversidades').DataTable().destroy();

    try {
      this.universidades = await ApiUniversidades.prototype.obter(pais);
    } catch (error) {
      alert("Erro: Api de lista de universidades não retornou como esperado, tente novamente mais tarde!");
    }


    setTimeout(() => {
      $('#tabelaUniversidades').DataTable({
        responsive: true,
        pageLength: 10,
        language: {
          url: "/assets/DataTablePtBR.json"
        }
      });
    }, 100);

  }

}

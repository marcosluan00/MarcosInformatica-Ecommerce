import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  descricao = ""
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.descricao){
      this.route.navigate(['produtos'], {queryParams: {descricao: this.descricao}})
      return;
    }
    this.route.navigate(['produtos'])
  }

}

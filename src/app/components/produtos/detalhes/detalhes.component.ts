import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { IProduto, IProdutoCarrinho } from './../../../produtos';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;
  constructor(private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacao: NotificacaoService,
    private carrinho: CarrinhoService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"))
    this.produto = this.produtosService.getOne(produtoId)
  }
  adicionarAoCarrinho(){
    this.notificacao.notificar("Produto adicionado ao carrinho")
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinho.adicionarAoCarrinho(produto)
  }

}

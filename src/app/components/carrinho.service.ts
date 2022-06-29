import { IProdutoCarrinho } from './../produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = []
  constructor() { }

  obterCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]")
    return this.itens;

  }
  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }
  limparCarrinho(){
    this.itens = []
    localStorage.clear()
  }
  removerProduto(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }
}

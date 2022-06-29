import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'produtos', loadChildren: () => import('./components/produtos/produtos.module').then(m => m.ProdutosModule) },
  {path: "", redirectTo: "produtos", pathMatch: "full"},
  {path: "carrinho", component: CarrinhoComponent},
  { path: 'contato', loadChildren: () => import('./components/contato/contato.module').then(m => m.ContatoModule) },
  {path: "**", component: NaoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

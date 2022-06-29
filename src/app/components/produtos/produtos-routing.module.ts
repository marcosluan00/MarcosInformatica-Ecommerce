import { DetalhesComponent } from './detalhes/detalhes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [{ path: '', component: ProdutosComponent },
  {path: ':id', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

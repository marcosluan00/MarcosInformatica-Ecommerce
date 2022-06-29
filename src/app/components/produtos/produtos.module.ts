import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }

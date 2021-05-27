import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosListaPageRoutingModule } from './produtos-lista-routing.module';

import { ProdutosListaPage } from './produtos-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosListaPageRoutingModule
  ],
  declarations: [ProdutosListaPage]
})
export class ProdutosListaPageModule {}

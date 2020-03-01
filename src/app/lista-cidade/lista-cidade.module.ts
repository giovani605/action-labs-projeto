import { IconeModule } from './../icone/icone.module';
import { NgModule } from '@angular/core';
import { ListaCidadeComponent } from './lista-cidade.component';
import { ItemCidadeComponent } from './item-cidade/item-cidade.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListaCidadeComponent, ItemCidadeComponent],
  imports: [CommonModule, IconeModule],
  exports: [ListaCidadeComponent, ItemCidadeComponent],
  providers: []
})
export class ListaCidadeModule {}

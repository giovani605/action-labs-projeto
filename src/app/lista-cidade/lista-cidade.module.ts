import { NgModule } from '@angular/core';
import { ListaCidadeComponent } from './lista-cidade.component';
import { ItemCidadeComponent } from './item-cidade/item-cidade.component';

@NgModule({
  declarations: [ListaCidadeComponent, ItemCidadeComponent],
  imports: [],
  exports: [ListaCidadeComponent, ItemCidadeComponent],
  providers: []
})
export class ListaCidadeModule {}

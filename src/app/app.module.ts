import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraPesquisaCidadeComponent } from './barra-pesquisa-cidade/barra-pesquisa-cidade.component';
import { ListaCidadeComponent } from './lista-cidade/lista-cidade.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaCidadeModule } from './lista-cidade/lista-cidade.module';
import { PaginaPesquisaComponent } from './pagina-pesquisa/pagina-pesquisa.component';
import { PaginaDetalhesComponent } from './pagina-detalhes/pagina-detalhes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraPesquisaCidadeComponent,
    PaginaPesquisaComponent,
    PaginaDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ListaCidadeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

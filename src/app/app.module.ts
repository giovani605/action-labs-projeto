import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraPesquisaCidadeComponent } from './barra-pesquisa-cidade/barra-pesquisa-cidade.component';
import { ListaCidadeComponent } from './lista-cidade/lista-cidade.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaCidadeModule } from './lista-cidade/lista-cidade.module';

@NgModule({
  declarations: [AppComponent, BarraPesquisaCidadeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ListaCidadeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

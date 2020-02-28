import { PaginaPesquisaComponent } from './pagina-pesquisa/pagina-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaDetalhesComponent } from './pagina-detalhes/pagina-detalhes.component';

const routes: Routes = [
  {
    path: 'search',
    component: PaginaPesquisaComponent
  },
  { path: 'details/:id', component: PaginaDetalhesComponent },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

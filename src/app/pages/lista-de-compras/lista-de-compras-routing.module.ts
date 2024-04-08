import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeComprasComponent } from './lista-de-compras.component';

const routes: Routes = [
  {
    path: "",
    component: ListaDeComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDeComprasRoutingModule { }

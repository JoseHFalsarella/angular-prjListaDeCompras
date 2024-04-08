import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "lista"
  },
  {
    path: "lista",
    loadChildren: () => import("./pages/lista-de-compras/lista-de-compras.module").then(m => m.ListaDeComprasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

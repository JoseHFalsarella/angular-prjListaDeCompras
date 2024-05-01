import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "register"
  },
  {
    path: "lista",
    loadChildren: () => import("./pages/lista-de-compras/lista-de-compras.module").then(m => m.ListaDeComprasModule)
  },
  {
    path: "register",
    loadChildren: () => import("./pages/register/register.module").then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

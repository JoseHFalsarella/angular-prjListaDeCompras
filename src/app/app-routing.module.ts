import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "lista"
  },
  {
    path: "lista",
    loadChildren: () => import("./pages/lista-de-compras/lista-de-compras.module").then(m => m.ListaDeComprasModule),
    //canActivate: [authGuard]
  },
  {
    path: "register",
    loadChildren: () => import("./pages/register/register.module").then(m => m.RegisterModule)
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Ruta principal donde esta mi dominio principal dominio.com */
const routes: Routes = [
  {
     /*Hacer la carga perezosa loadChildren para cargar modulos  */
    path:'auth',
    loadChildren: () => import('@modules/auth').then((m)=>m.
    AuthModule)
  },
  {
    path:'heroes',
    loadChildren: () => import('@modules/heroes').then((m)=>m.
    HeroesModule)

  },
  {
    path:'404',
    loadComponent:()=> import('@shared/pages').then((c)=>c.Error404PageComponent)

  },
  {
    //cuando hay un path vacia se necesita que se haga un redireccion cuando esta vacio que me dirija a heroes
    path:'',
    redirectTo:'heroes',
    pathMatch:'full'

  },
  { path: 'material', loadChildren: () => import('./modules/material/material.module').then(m => m.MaterialModule) },

  {
    //cuando sea cualquier cosa que no haga match con nada que haga un redireccion a la pagina 404
    path:'**',
    redirectTo:'404'

  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

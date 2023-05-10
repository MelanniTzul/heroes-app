import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { HeroesModule } from './modules/heroes/heroes.module';

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

  {
    //cuando sea cualquier cosa que no haga match con nada que haga un redireccion a la pagina 404
    path:'**',
    redirectTo:'404'

  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

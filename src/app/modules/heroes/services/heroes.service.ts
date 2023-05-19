import { HttpClient } from '@angular/common/http';
import { Injectable, inject,  } from '@angular/core';
import { catchError, Observable,of, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {Hero} from '../models';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private http = inject(HttpClient)//*Inyeccion
  private baseUrl:string= environment.baseUrl; //*variable de entorno


  //*Metodo
  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);

  }

  getHeroById(id:string):Observable<Hero |undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}
    `).pipe(
      catchError( (error)=> of(undefined))
    );

  }

  //*Nueva query, obtener una sugerencia
  //Para usar el servicio tengo que inyectarlo en search-page.component.ts
  getSuggestions(query: string):Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }

  //*AGREGAMOS
  addHero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);

  }

  //*ACTUALIZAMOS
  updateHero(hero:Hero):Observable<Hero>{
    if(!hero.id)throw Error('Hero id is required');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);

  }

  //*ELIMINAMOS
  deleteHero(id:string):Observable<boolean>{
    return this.http.delete<boolean>(`${ this.baseUrl }/heroes/$ {id}`)
    .pipe(
      catchError((error)=> of (false)),
      map(resp=>true)
    );

  }


}

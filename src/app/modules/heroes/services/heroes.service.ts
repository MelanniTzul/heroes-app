import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {Hero} from '../models';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private http = inject(HttpClient)//*Inyeccion
  private baseUrl:string= environment.baseUrl;


  //*Metodo
  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);

  }

  constructor() { }
}

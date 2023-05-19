import { Component, inject,OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Hero } from '../../models/hero.models';

@Component({
  selector:'app-list-page',
  templateUrl: './list-page.component.html',



})
export class ListPageComponent implements  OnInit{


  public heroes: Hero[]=[];

  private HeroesService=inject(HeroesService);



ngOnInit(): void {
    this.HeroesService.getHeroes().subscribe((heroes)=> this.heroes=heroes);
}


}

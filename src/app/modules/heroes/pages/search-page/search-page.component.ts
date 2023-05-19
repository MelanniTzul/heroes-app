import { Hero } from './../../models/hero.models';
import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector:'app-search-page',
  templateUrl: './search-page.component.html'
})

export class SearchPageComponent {

  public searchInput = new FormControl(''); //input reactivo
  public heroes: Hero[] = [];
  public selectedHero?:Hero;

  //*Inyeccion del servicio
  private HeroesService=inject(HeroesService);


  searchHero(){
    const value:string =this.searchInput.value || '';

    this.HeroesService.getSuggestions(value).subscribe
    ((heroes)=>this.heroes=heroes);
  }

  onSelectedOption(event:MatAutocompleteSelectedEvent):void{

      //*validacion
      if(!event.option.value){
        this.selectedHero=undefined;
        return
      }

      const hero:Hero =event.option?.value;
      this.searchInput.setValue(hero.superhero);
      this.selectedHero=hero;
  }
}



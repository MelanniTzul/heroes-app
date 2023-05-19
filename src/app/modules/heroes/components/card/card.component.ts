import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '@modules/heroes/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  implements OnInit{

   //Poder mandar el dato
   @Input() public heroe!: Hero;

  ngOnInit(): void {
    //*validar error
    if(!this.heroe)throw Error('Hero property es required');

  }




}

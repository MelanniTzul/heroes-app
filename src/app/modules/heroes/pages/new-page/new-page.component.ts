import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';

import { Hero, Publisher } from '@modules/heroes/models';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@modules/heroes/components/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
})
export class NewPageComponent implements OnInit {
  @Input() id?: string;

  //*Formulario reactivo
  public heroForm = new FormGroup({
    //*Propiedades que manejara */
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }), //* nonNullable,no quiero manejarlo con valores nullos
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });



  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ];

  //*Inyeccion al servicio
  private heroesService = inject(HeroesService);
  private snakcbar = inject(MatSnackBar);
  private router = inject(Router);
  private dialog=inject(MatDialog);//Mostrar modal

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {
    if (!this.id) return;

    this.heroesService.getHeroById(this.id).subscribe((hero) => {
      this.heroForm.reset(hero);
      return;
    })
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
        this.router.navigate(['/heroes/list']);
        this.showSnackbar(`${hero.superhero} modificado con exito!`)

      });

      return;
    }

    this.heroesService.addHero(this.currentHero).subscribe((hero) => {
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar(`${hero.superhero} creado con exito!`)


    })
  }

  //*Eliminar
  onDeleteHero():void {
    if (!this.currentHero.id) throw Error ('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.heroesService.deleteHero(this.currentHero.id).subscribe((wasDeleted) => {
        if (wasDeleted)
          this.router.navigate(['/heroes/list']);
      });
    });



  }

  showSnackbar(message: string): void {
    this.snakcbar.open(message, 'done', {
      duration: 2500,
    })
  }
}

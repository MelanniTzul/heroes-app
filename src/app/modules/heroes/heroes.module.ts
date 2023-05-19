import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '@modules/material';
import { CardComponent } from "./components/card/card.component";
import { RouterModule } from '@angular/router';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';




@NgModule({
    declarations: [
        LayoutPageComponent,
        HeroPageComponent,
        ListPageComponent,
        NewPageComponent,
        CardComponent,
        SearchPageComponent,
        HeroImagePipe,
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HeroesRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class HeroesModule { }

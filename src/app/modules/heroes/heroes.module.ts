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




@NgModule({
    declarations: [
        LayoutPageComponent,
        HeroPageComponent,
        ListPageComponent,
        NewPageComponent,
        SearchPageComponent
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        MaterialModule,
        CardComponent
    ]
})
export class HeroesModule { }

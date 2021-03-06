import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--NgModel lives here
import { HttpModule } from '@angular/http';

import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HeroSearchComponent} from './hero-search.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
], // <-- import relevant modules
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

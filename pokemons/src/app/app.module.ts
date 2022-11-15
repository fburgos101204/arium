import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonsComponent } from './Pokemons/list-pokemons/list-pokemons.component';
import { ListPokemonsFavComponent } from './FavPokemons/list-pokemons-fav/list-pokemons-fav.component';
import { EditPokemonFavComponent } from './FavPokemons/edit-pokemon-fav/edit-pokemon-fav.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonsComponent,
    ListPokemonsFavComponent,
    EditPokemonFavComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

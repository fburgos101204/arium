import { Routes } from '@angular/router';
import { ListPokemonsComponent } from './Pokemons/list-pokemons/list-pokemons.component';
import { ListPokemonsFavComponent } from './FavPokemons/list-pokemons-fav/list-pokemons-fav.component';
import { EditPokemonFavComponent } from './FavPokemons/edit-pokemon-fav/edit-pokemon-fav.component';

export const ROUTES: Routes = [
    { path: 'home', component: ListPokemonsComponent },
    { path: 'favoritos', component: ListPokemonsFavComponent },
    { path: 'edit/:id', component: EditPokemonFavComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
import { Component, OnInit, Output } from '@angular/core';
import { Favorito, Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {

  @Output() favoritePokemon: Favorito[] = [];
  pokemons: Pokemon[] = [];

  constructor(private service: PokeService) { }

  ngOnInit(): void {
    this.service.getListPokemons(10, 0).subscribe((res) => {
      this.pokemons = res.results;
      console.log(this.pokemons);
    })
  }

  saveFavorite(pokemon: Pokemon) {
    this.favoritePokemon = JSON.parse(localStorage.getItem('favPokemon') as any);

    const fav = this.transformIntoFavorite(pokemon);
    this.favoritePokemon.push(fav);

    localStorage.setItem('favPokemon', JSON.stringify(this.favoritePokemon));
  }

  transformIntoFavorite(pokemon: Pokemon): Favorito {
    return {
      name: pokemon.name,
      alias: `alias - ${pokemon.name}`,
      createdAt: new Date,
      imageUrl: pokemon.url,
    }
  }

}

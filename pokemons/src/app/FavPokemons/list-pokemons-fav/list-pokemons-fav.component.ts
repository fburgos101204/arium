import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorito } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-list-pokemons-fav',
  templateUrl: './list-pokemons-fav.component.html',
  styleUrls: ['./list-pokemons-fav.component.css']
})
export class ListPokemonsFavComponent implements OnInit {

  //@Input() favoritePokemon: Favorito[] = [];

  favoritePokemon: Favorito[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    let data: Favorito[] = JSON.parse(localStorage.getItem('favPokemon') as any);
    data.forEach(element => {
      this.favoritePokemon.push(element);
    })
  }

  deletePokemon(index: number) {
    this.favoritePokemon.splice(index, 1);
    localStorage.setItem('favPokemon', JSON.stringify(this.favoritePokemon))
  }

  editPokemon(idx: number) {
    this.router.navigate(['/edit', idx]);
  }
}

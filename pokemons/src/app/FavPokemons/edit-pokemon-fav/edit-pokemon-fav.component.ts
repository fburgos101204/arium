import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorito } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-edit-pokemon-fav',
  templateUrl: './edit-pokemon-fav.component.html',
  styleUrls: ['./edit-pokemon-fav.component.css']
})
export class EditPokemonFavComponent implements OnInit {
  favoritePokemon: Favorito = {
    name: "",
    alias: "",
    createdAt: new Date(),
    imageUrl: ""
  };

  globalId: number | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.globalId = param['id'];
      this.favoritePokemon = JSON.parse(localStorage.getItem('favPokemon') as any)[param['id']];
    })
  }

  ngOnInit(): void {
  }

  saveChanges(aliasName: string) {
    if (this.globalId == null) {
      return;
    }

    let register: Favorito[] = JSON.parse(localStorage.getItem('favPokemon') as any);
    register[this.globalId].alias = aliasName;
    localStorage.setItem('favPokemon', JSON.stringify(register));
  }

}

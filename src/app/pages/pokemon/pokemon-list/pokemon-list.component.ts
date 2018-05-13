import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonModel } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemons: PokemonModel[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getAll().subscribe((pokemons: PokemonModel[]) => {
      this.pokemons = pokemons;
    });
  }

}

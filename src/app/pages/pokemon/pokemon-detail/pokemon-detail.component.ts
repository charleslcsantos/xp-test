import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: PokemonModel;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      const pokemonId = p.id;
      this.getPokemon(pokemonId);
    });
  }

  getPokemon(id) {
    this.pokemonService.getById(id).subscribe(p => this.pokemon = p);
  }

}

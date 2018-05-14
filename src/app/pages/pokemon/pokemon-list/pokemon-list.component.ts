import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonModel, BasicInfo, PokemonListModel } from '../pokemon.model';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          transform: 'translateY(6%)',
          opacity: 0
        }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'translateY(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class PokemonListComponent implements OnInit {
  public pokemons: PokemonModel[];
  public pagination: {
    next: string,
    previous: string,
  };

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  public getPokemons(url?) {
    this.pokemonService.getAll(url).subscribe((res: PokemonListModel) => {
      this.pokemons = res.results;
      this.pagination = {
        next: res.next,
        previous: res.previous
      };
    });
  }

  public getPokemonId(pokemon: BasicInfo) {
    const regex = /\/\d+/g;
    const id = pokemon.url.match(regex)[0];
    return id;
  }

  public goTo(way) {
    this.getPokemons(this.pagination[way]);
  }

}

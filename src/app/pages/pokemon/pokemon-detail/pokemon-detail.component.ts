import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          transform: 'translateY(-6%)',
          opacity: 0
        }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'translateY(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: PokemonModel;
  public showLoader = true;

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
    this.pokemonService.getById(id).subscribe(p => {
      this.pokemon = p;
      this.showLoader = false;
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './pokemon.service';
import { LoaderComponent } from '../../components/loader/loader.component';

const COMPONENTS = [
  PokemonComponent,
  PokemonListComponent,
  PokemonDetailComponent,
  LoaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule
  ],
  declarations: COMPONENTS,
  providers: [ PokemonService ]
})
export class PokemonModule { }

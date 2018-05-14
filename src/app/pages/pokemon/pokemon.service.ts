import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PokemonModel, PokemonListModel } from './pokemon.model';

@Injectable()
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(url?): Observable<PokemonListModel> {
    if (url) {
      return this.httpClient.get(url) as Observable<PokemonListModel>;
    }
    return this.httpClient.get(`${environment.API}/pokemon`) as Observable<PokemonListModel>;
  }

  public getById(id): Observable<PokemonModel> {
    return this.httpClient.get(`${environment.API}/pokemon/${id}`) as Observable<PokemonModel>;
  }
}

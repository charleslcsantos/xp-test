import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PokemonModel } from './pokemon.model';

@Injectable()
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<PokemonModel[]> {
    return this.httpClient.get(`${environment.API}/pokemon`)
    .map(res => res['results']);
  }
}

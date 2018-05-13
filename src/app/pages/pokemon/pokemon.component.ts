import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: `
              <p>pokemon works!</p>
              <router-outlet></router-outlet>
              `
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

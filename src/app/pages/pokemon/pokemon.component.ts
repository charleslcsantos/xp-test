import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: `
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

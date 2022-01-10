import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetpokemonsService } from 'src/app/services/getpokemons/getpokemons.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.sass']
})
export class MainSectionComponent implements OnInit {

  title = "Pokedéx by Murillo";
  pokemons$: Observable<any> | undefined;

  constructor(
    private pokedex: GetpokemonsService
  ) { }

  ngOnInit(): void {    
    this.pokemons$ = this.pokedex.searchPokemon()
  }

}

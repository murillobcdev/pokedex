import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetpokemonsService {

  constructor(private req: HttpClient) { }

  searchPokemon(): Observable<any> {
    return this.req.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=20`).pipe(
      tap((res: any) => res),
      tap((res: { results: any[]; }) => {
        res.results.map((resPokemons: any) => {
          this.req.get<any>(resPokemons.url).pipe(
            map(
              (              res: any) => res
            )
          ).subscribe(
            res => resPokemons.others = res
          )
        })
      })
    )
  }
}

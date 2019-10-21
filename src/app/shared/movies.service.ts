import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

import { IMovie, IResult } from "./movie.model";

@Injectable()
export class MoviesService {
  private messageSource = new Subject<IMovie>();
  private myFavouriteMovies: IMovie[] = [];

  // currentMessage = this.messageSource.asObservable();

  // apiKey: string = "f1e07a6b0a80aa678e23a81b8077fbbc";
  constructor(private http: HttpClient) {}

  addToMyFavourite(movie: IMovie) {
    this.myFavouriteMovies.push(movie);
  }

  getMyFavourites(): IMovie[] {
    return this.myFavouriteMovies;
  }

  removeFromFavourite(index: number): void {}

  getMovies(): Observable<IResult> {
    return this.http.get<IResult>(
      `https://api.themoviedb.org/3/discover/movie?api_key=f1e07a6b0a80aa678e23a81b8077fbbc&sort_by=popularity.desc`
    );
  }

  getMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f1e07a6b0a80aa678e23a81b8077fbbc`
    );
  }

  searchMovies(searchTerm: string): Observable<IResult> {
    searchTerm.toLocaleLowerCase();
    return this.http.get<IResult>(
      `https://api.themoviedb.org/3/search/movie?api_key=f1e07a6b0a80aa678e23a81b8077fbbc&query=${searchTerm}`
    );
  }
}

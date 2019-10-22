import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

import { IMovie, IResult } from "./movie.model";

@Injectable()
export class MoviesService {
  // private myFavouriteMovies: IMovie[] = [];

  constructor(private http: HttpClient) {}

  // saveFavoriteMovies(movies: IMovie) {
  //   localStorage.setItem('favoriteMovies', JSON.stringify(movies))
  // }

  // addToMyFavourite(movie: IMovie) {
  //   this.myFavouriteMovies.push(movie);
  // }

  // getMyFavourites(): IMovie[] {
  //   return this.myFavouriteMovies;
  // }

  // removeFromFavourite(index: number): void {}

  fetchMovies(): Observable<IResult> {
    return this.http.get<IResult>(
      `https://api.themoviedb.org/3/discover/movie?api_key=f1e07a6b0a80aa678e23a81b8077fbbc&sort_by=popularity.desc`
    );
  }

  saveMovies(movies: IMovie[]) {
    sessionStorage.setItem("movies", JSON.stringify(movies));
  }

  getMoviesFromStorage(): IMovie[] {
    return JSON.parse(sessionStorage.getItem("movies"));
  }

  getMovie(id: number): IMovie {
    return this.getMoviesFromStorage().find((movie: IMovie) => movie.id === id);
  }

  searchMovies(searchTerm: string): Observable<IResult> {
    searchTerm.toLocaleLowerCase();
    return this.http.get<IResult>(
      `https://api.themoviedb.org/3/search/movie?api_key=f1e07a6b0a80aa678e23a81b8077fbbc&query=${searchTerm}`
    );
  }

  saveSearchResults(results: IMovie[]) {
    if (window.sessionStorage) {
      sessionStorage.setItem("searchResults", JSON.stringify(results));
    }
  }
}

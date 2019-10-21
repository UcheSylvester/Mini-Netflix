import { Injectable } from "@angular/core";
import { IMovie } from "./movie.model";

@Injectable()
export class FavoriteService {
  constructor() {}

  favoriteMovies: IMovie[] = [];

  saveFavoriteMovies(favoriteMovies: IMovie[]) {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }

  addToFavoriteMovies(movies: IMovie) {
    this.favoriteMovies.push(movies);
    this.saveFavoriteMovies(this.favoriteMovies);
  }

  getFavoriteMovies(): IMovie[] {
    // this.favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
    return JSON.parse(localStorage.getItem("favoriteMovies"));
  }
}

import { Component, OnInit } from "@angular/core";

import { IMovie } from "src/app/shared/movie.model";
import { FavoriteService } from "src/app/shared/favorite.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  movies: IMovie[];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.movies = this.favoriteService.getFavoriteMovies();
    // console.log("fav", this.movies);
    this.movies.forEach(movie => console.log(movie.favorite));
  }
}

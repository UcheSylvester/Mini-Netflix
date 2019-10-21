import { Component, OnInit } from "@angular/core";

import { IMovie } from "src/app/shared/movie.model";
import { MoviesService } from "src/app/shared/movies.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  movies: IMovie[];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movies = this.movieService.getMyFavourites();

    console.log(this.movies);
  }
}

import { Component, OnInit, Input } from "@angular/core";

import { IMovie } from "src/app/shared/movie.model";
import { FavoriteService } from "src/app/shared/favorite.service";

@Component({
  selector: "app-movie-thumbnail",
  templateUrl: "./movie-thumbnail.component.html",
  styleUrls: ["./movie-thumbnail.component.css"]
})
export class MovieThumbnailComponent implements OnInit {
  @Input("recievedMovie") movie: IMovie;

  constructor(private favoriteService: FavoriteService) {}

  // addToFavorite(movie: IMovie) {
  //   this.movieService.addToMyFavourite(movie);
  // }

  ngOnInit() {
    // console.log(this.movie);
  }

  addToFavorite(movie: IMovie) {
    if (!movie.favorite) {
      movie.favorite = true;
      this.favoriteService.addToFavoriteMovies(movie);
      console.log("mt", movie.favorite);
    }
  }
}

import { Router } from "@angular/router";

import { Component, OnInit, Input } from "@angular/core";

import { IMovie } from "src/app/shared/movie.model";
import { MoviesService } from "src/app/shared/movies.service";

@Component({
  selector: "app-movie-thumbnail",
  templateUrl: "./movie-thumbnail.component.html",
  styleUrls: ["./movie-thumbnail.component.css"]
})
export class MovieThumbnailComponent implements OnInit {
  @Input("recievedMovie") movie: IMovie;
  // message: string;

  constructor(private router: Router, private movieService: MoviesService) {}

  ngOnInit() {
    this.movie.favorite = false;
    // console.log(this.movie);
    // this.movieService.currentMessage.subscribe(
    //   message => (this.message = message)
    // );
  }

  addToFavorite(movie: IMovie) {
    console.log(movie);
    if (!movie.favorite) {
      this.movie.favorite = true;
    }
  }
}

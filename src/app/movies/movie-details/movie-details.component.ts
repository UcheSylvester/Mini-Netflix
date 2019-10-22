import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { IMovie } from "src/app/shared/movie.model";
import { MoviesService } from "src/app/shared/movies.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params: Params) => (id = params["id"]));

    this.movie = this.movieService.getMovie(+id);
    console.log(this.movie);
  }
}

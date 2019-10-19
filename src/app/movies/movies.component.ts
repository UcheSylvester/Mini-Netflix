import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../shared/movies.service";
import { IMovie, IResult } from "../shared/movie.model";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      (data: IResult) => {
        // find out why the modal isn't working
        this.movies = data.results;
        // console.log(this.movies);
      },
      err => console.log(err)
    );
  }
}

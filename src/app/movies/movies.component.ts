import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MoviesService } from "../shared/movies.service";
import { IMovie, IResult } from "../shared/movie.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  searchTerm: string;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.fetchMovies().subscribe(
      (data: IResult) => {
        this.movies = data.results;
        this.movies.forEach((movie: IMovie) => (movie.favorite = false));

        this.moviesService.saveMovies(this.movies);
        this.movies = this.moviesService.getMoviesFromStorage();
        // console.log("movies", this.movies);
      },
      err => console.log(err)
    );
    // this.movies = this.moviesService.movies;
    // console.log(this.movies);
  }

  searchMovies(form: NgForm) {
    // console.log(typeof form.controls.searchInput.value);
    this.searchTerm = form.controls.searchInput.value;

    this.moviesService
      .searchMovies(this.searchTerm)
      .subscribe(
        (data: IResult) => (this.movies = data.results),
        err => console.log(err)
      );

    this.searchTerm = "";
  }
}

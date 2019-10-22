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
  searchResults: IMovie[] = [];

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
  }

  searchMovies(form: NgForm) {
    // console.log(typeof form.controls.searchInput.value);
    this.searchTerm = form.controls.searchInput.value;

    // TODO: searching not ready yet!!!

    this.moviesService.searchMovies(this.searchTerm).subscribe(
      (data: IResult) => {
        // this.movies = data.results
        this.searchResults = data.results;
        this.searchResults.forEach((movie: IMovie) => (movie.favorite = false));
        this.movies = this.searchResults;
        console.log(this.movies);

        this.moviesService.saveSearchResults(this.searchResults);
      },
      err => console.log(err)
    );

    this.searchTerm = "";
  }
}

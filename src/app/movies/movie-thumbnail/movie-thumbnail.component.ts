import { Router } from "@angular/router";

import { Component, OnInit, Input } from "@angular/core";
import { IMovie } from "src/app/shared/movie.model";

@Component({
  selector: "app-movie-thumbnail",
  templateUrl: "./movie-thumbnail.component.html",
  styleUrls: ["./movie-thumbnail.component.css"]
})
export class MovieThumbnailComponent implements OnInit {
  @Input("recievedMovie") movie: IMovie;

  constructor(private router: Router) {}

  ngOnInit() {}
}

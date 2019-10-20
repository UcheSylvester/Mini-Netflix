import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private movieService: MoviesService) {}

  ngOnInit() {}


}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { IMovie, IResult } from "./movie.model";

@Injectable()
export class MoviesService {
  // private messageSource = new BehaviorSubject("hello");
  // currentMessage = this.messageSource.asObservable();

  // apiKey: string = "f1e07a6b0a80aa678e23a81b8077fbbc";
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IResult> {
    return this.http.get<IResult>(
      `https://api.themoviedb.org/3/discover/movie?api_key=f1e07a6b0a80aa678e23a81b8077fbbc&sort_by=popularity.desc`
    );
  }

  getMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f1e07a6b0a80aa678e23a81b8077fbbc`
    );
  }

  searchMovies(searchTerm: string): Observable<IResult> {
    return this.http.get<IResult>(
      `https://api.themoviedb.org/3/search/movie?api_key=f1e07a6b0a80aa678e23a81b8077fbbc&query=${searchTerm}`
    );
  }

  addToFavorite(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f1e07a6b0a80aa678e23a81b8077fbbc`
    );
  }

  // changeMessage(message: string) {
  //   console.log("message source", this.messageSource);
  //   console.log("current message", this.currentMessage);
  //   this.messageSource.next(message);
  // }
}

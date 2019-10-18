import { Routes } from "@angular/router";

import { MoviesComponent } from "./movies/movies.component";
import { FavoritesComponent } from "./movies/favorites/favorites.component";
import { MovieDetailsComponent } from "./movies/movie-details/movie-details.component";
import { ErrorsComponent } from "./errors/errors.component";

export const appRoutes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "404", component: ErrorsComponent },
  { path: "movies/:id", component: MovieDetailsComponent },
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

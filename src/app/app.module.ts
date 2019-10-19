import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieThumbnailComponent } from "./movies/movie-thumbnail/movie-thumbnail.component";
import { MovieDetailsComponent } from "./movies/movie-details/movie-details.component";
import { ErrorsComponent } from "./errors/errors.component";
import { FavoritesComponent } from "./movies/favorites/favorites.component";
import { appRoutes } from "./routes";
import { LoginComponent } from "./login/login.component";
import { MoviesService } from "./shared/movies.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieThumbnailComponent,
    MovieDetailsComponent,
    ErrorsComponent,
    FavoritesComponent,
    LoginComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

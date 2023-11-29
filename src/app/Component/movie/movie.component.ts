import { Component } from '@angular/core';
import { movies } from './movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  movies = movies;

  public buttonTexts = ['Vote', 'Vote', 'Vote', 'Vote'];

  public voteMovie(index: number) {
    const movie = this.movies[index];
    const isVoted = movie.voted;
    movie.voted = !isVoted;
    this.buttonTexts[index] = isVoted ? 'Vote' : 'Unvote';
  }
}

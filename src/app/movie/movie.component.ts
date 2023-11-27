import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

  public movies = [
    { title: 'GodFather', poster: 'https://miro.medium.com/v2/resize:fit:1000/1*Nxaz2PmGHZYJv0gIcBOOWg.jpeg', voted: false },
    { title: 'Pearl Harbour', poster: 'https://metro.co.uk/wp-content/uploads/2016/04/pearl-harbor-movie.jpg?quality=90&strip=all', voted: false },
    { title: 'Peaky Blinders', poster: 'https://e0.pxfuel.com/wallpapers/962/608/desktop-wallpaper-peaky-blinders-peaky-blinders-poster-peaky-blinders-peaky-blinders.jpg', voted: false },
    { title: 'Top Gun', poster: 'https://wallpapercrafter.com/th8001/668008-Tom-Cruise-actor-Top-Gun-F-14-Tomcat-movies-one.jpg', voted: false }
  ]

  public buttonTexts = ['Vote', 'Vote', 'Vote', 'Vote'];

  public vote(index: number): void {
    if (this.movies[index].voted) {
      this.movies[index].voted = false;
      this.buttonTexts[index] = 'Vote';
    } else {
      this.movies[index].voted = true;
      this.buttonTexts[index] = 'Unvote';
    }
  }
}

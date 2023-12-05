import { Component } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  imageSubject : Subject<string> = new Subject<string>();
  imageObservable$= this.imageSubject.asObservable();

  constructor() { 
      setInterval(() => { 
        const index = Math.floor(Math.random() * this.images.length);
        this.imageSubject.next(this.images[index]);
      }, 1000);
  }

  images = [
    "404.png",
    "as.jpg",
    "cv.jpg",
    "rotating_card_profile.png",
    "rotating_card_profile2.png",
    "rotating_card_profile3.png",
];

  

}

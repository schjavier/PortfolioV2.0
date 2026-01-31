import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-brotes',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './brotes.html',
  styleUrl: './brotes.css',
})
export class Brotes {

  imgPath: string = 'brotesLogin.png';
  repoBackPath : string = 'https://github.com/schjavier/BrotesApi' ;
  repoFrontPath :  string = 'https://github.com/schjavier/BrotesFront' ;
}

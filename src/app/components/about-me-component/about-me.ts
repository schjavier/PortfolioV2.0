import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

  imgPath: string = "perfil.webp";

}

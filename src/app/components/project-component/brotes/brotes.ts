import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-brotes',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './brotes.html',
  styleUrl: './brotes.css',
})
export class Brotes {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  imgPath = 'brotesLogin.png';
  repoBackPath = 'https://github.com/schjavier/BrotesApi';
  repoFrontPath = 'https://github.com/schjavier/BrotesFront';
}

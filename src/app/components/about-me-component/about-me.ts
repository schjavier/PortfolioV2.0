import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

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
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;
  imgPath = 'perfil.webp';
}

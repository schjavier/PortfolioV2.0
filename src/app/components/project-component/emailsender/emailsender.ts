import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-emailsender',
  imports: [],
  templateUrl: './emailsender.html',
  styleUrl: './emailsender.css',
})
export class Emailsender {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  repoBackPath = 'https://github.com/schjavier/emailSender';
}

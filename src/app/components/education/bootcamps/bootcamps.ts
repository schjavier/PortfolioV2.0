import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-bootcamps',
  imports: [],
  templateUrl: './bootcamps.html',
  styleUrl: './bootcamps.css',
})
export class BootcampsComponent {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;
}

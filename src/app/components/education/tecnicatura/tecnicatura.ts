import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-tecnicatura',
  imports: [],
  templateUrl: './tecnicatura.html',
  styleUrl: './tecnicatura.css',
})
export class TecnicaturaComponent {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;
}

import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  languageLabel = computed(() => {
    return this.languageService.language() === 'es' ? 'EN' : 'ES';
  });

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}

import { Injectable, computed, signal } from '@angular/core';
import { translationsDictionary } from '../i18n/translations';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = signal<'es' | 'en'>('es');
  
  currentTranslations = computed(() => {
    return this.language() === 'es' ? translationsDictionary.es : translationsDictionary.en;
  });

  constructor() {
    const browserLanguage = navigator.language || 'en';
    this.language.set(browserLanguage.startsWith('es') ? 'es' : 'en');
  }

  toggleLanguage() {
    this.language.update((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'));
  }
}

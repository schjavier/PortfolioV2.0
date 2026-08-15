import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  name = signal('');
  email = signal('');
  comment = signal('');

  isEmailValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email());
  });

  isFormValid = computed(() => {
    return (
      this.name().trim().length > 0 &&
      this.isEmailValid() &&
      this.comment().trim().length > 0
    );
  });

  sendContact(event: Event) {
    event.preventDefault();
    if (this.isFormValid()) {
      const contactData = {
        name: this.name(),
        email: this.email(),
        comment: this.comment(),
      };
      console.log(contactData);
    }
  }
}

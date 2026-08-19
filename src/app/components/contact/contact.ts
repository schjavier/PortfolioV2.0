import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import {SendMail} from '../../services/send-mail';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  sendMailService = inject(SendMail);

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
      const contactRequest = {
        name: this.name(),
        email: this.email(),
        subject: "Contacto",
        text: this.comment(),
      };

      this.sendMailService.sendMail(contactRequest).subscribe({
        next: () => {
          console.log("Mensaje Enviado");
          this.name.set('');
          this.email.set('');
          this.comment.set('');

        }, error: (err) => {
          console.log("Ups! algo salio mal: " + err.message);
        }
      })

    }
  }
}

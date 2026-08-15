import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
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

import { Component, computed, inject, input } from '@angular/core';
import { Brotes } from './brotes/brotes';
import { Emailsender } from './emailsender/emailsender';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-project-component',
  imports: [
    Brotes,
    Emailsender
  ],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  projectName = input<string>();
  projectKey = computed(() => this.projectName()?.toLowerCase());
}

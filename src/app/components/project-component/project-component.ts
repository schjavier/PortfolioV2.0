import {Component, computed, effect, inject, input} from '@angular/core';
import { Brotes } from './brotes/brotes';
import { Emailsender } from './emailsender/emailsender';
import { LanguageService } from '../../services/language.service';
import {Router} from '@angular/router';

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

  router = inject(Router);
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  projectName = input<string>();
  projectKey = computed(() => this.projectName()?.toLowerCase());

  constructor() {
    effect (() =>{
      const activeProject = this.projectKey();
      if(activeProject && activeProject !== 'brotes' && activeProject !== 'emailsender'){
        this.router.navigate(['/']);
      }
      })
  }
}

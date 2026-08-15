import { Component, computed, inject, input } from '@angular/core';
import { BootcampsComponent } from './bootcamps/bootcamps';
import { TecnicaturaComponent } from './tecnicatura/tecnicatura';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education',
  imports: [
    BootcampsComponent,
    TecnicaturaComponent,
    RouterLink
  ],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class EducationComponent {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  educationType = input<string>();
  typeKey = computed(() => this.educationType()?.toLowerCase());
}

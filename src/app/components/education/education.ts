import { Component, computed, input } from '@angular/core';
import { BootcampsComponent } from './bootcamps/bootcamps';
import { TecnicaturaComponent } from './tecnicatura/tecnicatura';
import { RouterLink } from '@angular/router';

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
  educationType = input<string>();
  typeKey = computed(() => this.educationType()?.toLowerCase());
}

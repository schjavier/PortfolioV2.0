import {Component, computed, input} from '@angular/core';
import {Brotes} from './brotes/brotes';
import {Emailsender} from './emailsender/emailsender';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project-component',
  imports: [
    Brotes,
    Emailsender,
    RouterLink
  ],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {

  projectName = input<string>();
  projectKey = computed(() => this.projectName()?.toLowerCase());

}

import {Component, Input, input} from '@angular/core';
import {Brotes} from './brotes/brotes';
import {Emailsender} from './emailsender/emailsender';

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

  projectName = input<string>();

}

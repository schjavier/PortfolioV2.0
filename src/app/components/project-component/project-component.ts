import {Component, Input, input} from '@angular/core';
import {Brotes} from './brotes/brotes';

@Component({
  selector: 'app-project-component',
  imports: [
    Brotes
  ],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {

  projectName= input<string>();

}

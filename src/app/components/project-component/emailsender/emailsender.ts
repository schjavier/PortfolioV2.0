import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-emailsender',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './emailsender.html',
  styleUrl: './emailsender.css',
})
export class Emailsender {

  projectName: string = 'EmailSender (Microservicio de Notificaciones)'
  repoBackPath: string = 'https://github.com/schjavier/emailSender';


}

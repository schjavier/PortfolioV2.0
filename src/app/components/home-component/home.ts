import {Component, inject, OnInit, signal} from '@angular/core';
import { MermaidGitGraphComponent } from '../mermaid-git-graph-component/mermaid-git-graph-component';
import { LanguageService } from '../../services/language.service';
import {Tutorial} from '../tutorial/tutorial';

@Component({
  selector: 'app-home',
  imports: [
    MermaidGitGraphComponent,
    Tutorial
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  isCompleted = signal<boolean>(false);

  ngOnInit(): void {

    const tutorialStatus = localStorage.getItem('tutorial-status');
    if (tutorialStatus && tutorialStatus === 'completed') {
      this.isCompleted.set(true);
    }


  }


}

import { Component, inject } from '@angular/core';
import { MermaidGitGraphComponent } from '../mermaid-git-graph-component/mermaid-git-graph-component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [
    MermaidGitGraphComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;
}

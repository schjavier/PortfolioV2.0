import { AfterViewInit, Component, computed, ElementRef, inject, signal, ViewChild, effect } from '@angular/core';
import mermaid from 'mermaid';
import { Router } from '@angular/router';
import { mermaidConfig } from './mermaid-git-graph-config';
import { gitGraphDefinitionEs, gitGraphDefinitionEn } from './gitGraphDefinition';
import { gitGraphDefinitionMovilEs, gitGraphDefinitionMovilEn } from './gitGraphDefinitionMovil';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-mermaid-git-graph-component',
  imports: [],
  templateUrl: './mermaid-git-graph-component.html',
  styleUrl: './mermaid-git-graph-component.css',
})
export class MermaidGitGraphComponent implements AfterViewInit {
  router = inject(Router);
  languageService = inject(LanguageService);

  @ViewChild('mermaid', { static: false }) mermaidElement!: ElementRef;

  viewportWidth = signal<number>(0);
  isMobile = computed(() => this.viewportWidth() <= 750);
  isViewInitialized = signal(false);

  constructor() {
    this.viewportWidth.set(window.innerWidth);

    effect(() => {
      if (this.isViewInitialized()) {
        const activeLanguage = this.languageService.language();
        const mobileView = this.isMobile();
        this.renderGraph(activeLanguage, mobileView);
      }
    });
  }

  ngAfterViewInit(): void {
    mermaid.initialize(mermaidConfig);
    this.isViewInitialized.set(true);
  }

  private renderGraph(language: 'es' | 'en', mobileView: boolean) {
    let graphDefinition: string;

    if (language === 'es') {
      graphDefinition = mobileView ? gitGraphDefinitionMovilEs : gitGraphDefinitionEs;
    } else {
      graphDefinition = mobileView ? gitGraphDefinitionMovilEn : gitGraphDefinitionEn;
    }

    const containerElement = this.mermaidElement.nativeElement;
    containerElement.innerHTML = '';

    const uniqueId = `mermaid-svg-${Date.now()}`;

    try {
      mermaid.render(uniqueId, graphDefinition).then((result) => {
        containerElement.innerHTML = result.svg;
        this.setupGitGraphListeners(containerElement);
      });
    } catch (error) {
      console.error(error);
    }
  }

  private handleCommitClick(commitLabel: string) {
    const routeMapping: Record<string, string> = {
      'Contacto': 'contact',
      'Contact': 'contact',
      'Tecnicatura': 'education/tecnicatura',
      'Degree': 'education/tecnicatura',
      'Bootcamps': 'education/bootcamps',
      'Brotes': 'projects/brotes',
      'EmailSender': 'projects/emailsender',
      'AboutMe': 'aboutme',
      'FullStack Developer': 'experience'
    };

    const targetRoute = routeMapping[commitLabel] || commitLabel;
    this.router.navigate([`/${targetRoute}`]);
  }

  private setupGitGraphListeners(container: HTMLElement) {
    const commits = container.querySelectorAll('.commit-label');

    commits.forEach((commit) => {
      const htmlCommit = commit as HTMLElement;
      htmlCommit.style.cursor = 'pointer';

      htmlCommit.addEventListener('click', () => {
        const commitId = htmlCommit.textContent || htmlCommit.getAttribute('id') || 'unknown';
        this.handleCommitClick(commitId);
      });
    });
  }
}

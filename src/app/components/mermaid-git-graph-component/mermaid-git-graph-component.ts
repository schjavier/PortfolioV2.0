import {AfterViewInit, Component, computed, ElementRef, inject, signal, ViewChild} from '@angular/core';
import mermaid from 'mermaid';
import {Router} from '@angular/router';
import {mermaidConfig} from './mermaid-git-graph-config';
import {gitGraphDefinition} from './gitGraphDefinition';
import {gitGraphDefinitionMovil} from './gitGraphDefinitionMovil';

@Component({
  selector: 'app-mermaid-git-graph-component',
  imports: [],
  templateUrl: './mermaid-git-graph-component.html',
  styleUrl: './mermaid-git-graph-component.css',
})

export class MermaidGitGraphComponent implements AfterViewInit {

  router = inject(Router);
  @ViewChild('mermaid', {static: false}) mermaid!:ElementRef;

  viewPortWidth = signal<number>(0);
  isMobile = computed(() => this.viewPortWidth() <= 750 );

  constructor() {
    this.viewPortWidth.set(window.innerWidth)
  }

  ngAfterViewInit(): void {
    mermaid.initialize(mermaidConfig);

    let graphDefinition:string;

    if (this.isMobile()){
      graphDefinition = gitGraphDefinitionMovil;
    } else {
      graphDefinition = gitGraphDefinition;
    }

    const element = this.mermaid.nativeElement;

    try {

      mermaid.render('GraphName', graphDefinition).then( (result) => {
        element.innerHTML = result.svg;
        this.setupGitGraphListeners(element)
      });
    } catch (error) {
      console.error("mermaid error" + error);
    }
  }

  private handleCommitClick(commitId: string) {
    this.router.navigate([`/${commitId}`]);
  }

  private setupGitGraphListeners( container: HTMLElement ) {
    const commits = container.querySelectorAll('.commit-label');

    commits.forEach(commit => {
      (commit as HTMLElement).style.cursor = 'pointer';

      commit.addEventListener('click', () => {
        const id = commit.textContent || commit.getAttribute('id') || "unknown";
        this.handleCommitClick(id);
      })
    })
  }

}


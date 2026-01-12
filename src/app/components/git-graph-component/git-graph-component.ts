import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed, effect,
  ElementRef,
  HostListener,
  inject,
  signal,
  ViewChild
} from '@angular/core';
import {Router} from '@angular/router';
import {createGitgraph, Orientation} from '@gitgraph/js';
import {GitGraphCustomTheme} from '../../git-graph-custom-theme';
import {GitGraphCustomThemeMobile} from '../../git-graph-custom-theme-mobile';

@Component({
  selector: 'app-git-graph-component',
  imports: [],
  templateUrl: './git-graph-component.html',
  styleUrl: './git-graph-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GitGraphComponent{

  router = inject(Router);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.tooltipX.set(event.clientX);
    this.tooltipY.set(event.clientY);
  }

  @HostListener('window:resize')
  onResize(){
    this.windowSize.set(window.innerWidth)
  }

  isMobile = computed<boolean>(()=> {
    return this.windowSize() < 550;
  });

  @ViewChild('graphContainer', {static: true}) graphContainer!: ElementRef;

  windowSize = signal<number>(window.innerWidth);

  tooltipVisible = signal<boolean>(false);
  tooltipText = signal<string>('');
  tooltipX = signal<number>(0);
  tooltipY = signal<number>(0);

  emptyTooltip = document.createElementNS('http://www.w3.org/2000/svg','g');

  branchOrder = signal<String[]>(['Main', 'Proyectos', 'Experiencia'])

  constructor() {

    effect(() => {
      this.renderGraph();
    });

  }

  renderGraph(){

    const container = this.graphContainer.nativeElement;
    container.innerHTML = '';

    const gitGraph = createGitgraph(container, {
      template: this.isMobile() ? GitGraphCustomThemeMobile : GitGraphCustomTheme,
      orientation: this.isMobile() ? Orientation.VerticalReverse : Orientation.Horizontal,

      compareBranchesOrder: (branchNameA, branchNameB) => {
        return this.branchOrder().indexOf(branchNameA) - this.branchOrder().indexOf(branchNameB);
      },

      responsive: true
    })

    const main = gitGraph.branch('Main');

    main.commit({
      subject: "add: 'Home' Section",
      onMouseOver: (commit) => {
        this.tooltipText.set(commit.subject);
        this.tooltipVisible.set(true);

      },
      onMouseOut: () => {
        this.tooltipVisible.set(false);
      },
      renderTooltip: () => this.emptyTooltip
    })

    main.commit({
      subject: "add: 'About Me' section",
      onClick: () => this.router.navigate(['/aboutme']),
      onMessageClick: () => this.router.navigate(['/aboutme']),
      onMouseOver: (commit) => {
        this.tooltipText.set(commit.subject);
        this.tooltipVisible.set(true);

      },
      onMouseOut: () => {
        this.tooltipVisible.set(false);
      },
      renderTooltip: () => this.emptyTooltip
    })

    const projectsBranch = gitGraph.branch('Main').branch("Proyectos");

    projectsBranch.commit({
      subject: "add: 'Brotes'",
      onClick: () => this.router.navigate(['/projects/brotes']),
      onMouseOver: (commit) => {
        this.tooltipText.set(commit.subject);
        this.tooltipVisible.set(true);

      },
      onMouseOut: () => {
        this.tooltipVisible.set(false);
      },
      renderTooltip: () => this.emptyTooltip
    });

    projectsBranch.commit({
      subject: "add: 'EmailSender'",
      onClick: () => this.router.navigate(['/proyectos']),
      onMouseOver: (commit) => {
        this.tooltipText.set(commit.subject);
        this.tooltipVisible.set(true);

      },
      onMouseOut: () => {
        this.tooltipVisible.set(false);
      },
      renderTooltip: () => this.emptyTooltip
    });


    const expBranch = gitGraph.branch("Main").branch("Experiencia");

    expBranch.commit({
      subject: "fix: 'Experiencia'",
      onClick: () => this.router.navigate(['/experiencia']),
      onMouseOver: (commit) => {
        this.tooltipText.set(commit.subject);
        this.tooltipVisible.set(true);

      },
      onMouseOut: () => {
        this.tooltipVisible.set(false);
      },
      renderTooltip: () => this.emptyTooltip
    });


    main.commit({
      subject: "add: 'Contácto'",
      onClick: () => this.router.navigate(['/contacto']),
      onMouseOver: (commit) => {
        this.tooltipText.set(commit.subject);
        this.tooltipVisible.set(true);

      },
      onMouseOut: () => {
        this.tooltipVisible.set(false);
      },
      renderTooltip: () => this.emptyTooltip
    });
  }

  resetContainer(container: ElementRef) {
    container.nativeElement.innerHTML = '';
  }

}

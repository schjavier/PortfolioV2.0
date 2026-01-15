import {Component} from '@angular/core';
import {MermaidGitGraphComponent} from '../mermaid-git-graph-component/mermaid-git-graph-component';

@Component({
  selector: 'app-home',
  imports: [
    MermaidGitGraphComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}


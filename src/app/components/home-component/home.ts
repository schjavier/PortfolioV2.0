import {Component} from '@angular/core';
import {GitGraphComponent} from '../git-graph-component/git-graph-component';
import {HeaderComponent} from '../header-component/header-component';

@Component({
  selector: 'app-home',
  imports: [
    GitGraphComponent,
    HeaderComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}


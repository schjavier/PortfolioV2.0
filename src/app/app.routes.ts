import { Routes } from '@angular/router';
import {Home} from './components/home-component/home';
import {AboutMe} from './components/about-me-component/about-me';
import {ProjectComponent} from './components/project-component/project-component';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'aboutme',
    component: AboutMe
  },
  {
    path: 'projects/:projectName',
    component: ProjectComponent
  }



];

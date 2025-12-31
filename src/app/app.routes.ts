import { Routes } from '@angular/router';
import {Home} from './components/home-component/home';
import {AboutMe} from './components/about-me-component/about-me';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path : 'aboutme',
    component: AboutMe
  }


];

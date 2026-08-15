import { Routes } from '@angular/router';
import {Home} from './components/home-component/home';
import {AboutMe} from './components/about-me-component/about-me';
import {ProjectComponent} from './components/project-component/project-component';
import {EducationComponent} from './components/education/education';
import {ContactComponent} from './components/contact/contact';

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
    path: 'AboutMe',
    component: AboutMe
  },
  {
    path: 'Bootcamps',
    component: EducationComponent,
    data: { educationType: 'bootcamps' }
  },
  {
    path: 'Tecnicatura',
    component: EducationComponent,
    data: { educationType: 'tecnicatura' }
  },
  {
    path: 'Contacto',
    component: ContactComponent
  },
  {
    path: ':projectName',
    component: ProjectComponent
  }
];

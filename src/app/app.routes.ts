import { Routes } from '@angular/router';
import {Home} from './components/home-component/home';
import {AboutMe} from './components/about-me-component/about-me';
import {ProjectComponent} from './components/project-component/project-component';
import {EducationComponent} from './components/education/education';
import {ContactComponent} from './components/contact/contact';
import {ExperienceComponent} from './components/experience/experience';

export const routes: Routes = [

  {
    path: 'aboutme',
    component: AboutMe
  },
  {
    path: 'bootcamps',
    component: EducationComponent,
    data: { educationType: 'bootcamps' }
  },
  {
    path: 'tecnicatura',
    component: EducationComponent,
    data: { educationType: 'tecnicatura' }
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: ':projectName',
    component: ProjectComponent
  },
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path:"**",
    pathMatch:'prefix',
    component: Home
  },
  {
    path:"",
    pathMatch:'prefix',
    component: Home
  },

];

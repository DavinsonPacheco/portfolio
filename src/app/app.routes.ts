import { Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SkillsComponent} from "./skills/skills.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  { path: '',
    redirectTo: 'about-me',
    pathMatch: 'full'
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  { path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'about-me'
  }
];

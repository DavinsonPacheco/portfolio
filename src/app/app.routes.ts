import { Routes } from '@angular/router';
import {PROJECTS_ROUTES} from "./projects/projects.routes";

export const routes: Routes = [
  { path: 'projects',
    loadChildren: () => import('./projects/projects.routes').then( m => m.PROJECTS_ROUTES)
  },
  {
    path: 'skills',
    loadChildren: ()=> import('./skills/skills.routes').then( m => m.SKILLS_ROUTES)
  },
  {
    path: 'contact',
    loadChildren: ()=> import('./contact/contact.routes').then( m => m.CONTACT_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'projects'
  }
];

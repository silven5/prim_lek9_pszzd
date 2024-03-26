import { Routes } from '@angular/router';
import { ObserableExampleComponent } from './obserable-example/obserable-example.component';
import { HooExampleComponent } from './hoo-example/hoo-example.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';

export const routes: Routes = [
  { path: 'observable', component: ObserableExampleComponent },
  { path: 'hoo', component: HooExampleComponent },
  { path: 'http', component: HttpExampleComponent },
  { path: 'subject', component: SubjectExampleComponent },
];

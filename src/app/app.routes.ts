import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Juanes Pachón 🔗 - Home'},
    { path: 'project/:id', component: ProjectPageComponent, title: 'Juanes Pachón 🔗 - Projects'},
];

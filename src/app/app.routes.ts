import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { FacultyComponent } from './faculty/faculty.component';
import { KnowladgeComponent } from './knowladge/knowladge.component';
import { RoadComponent } from './road/road.component';
import { ChalangesComponent } from './chalanges/chalanges.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'fakultāte',
        component: FacultyComponent
    },
    {
        path: 'kursi',
        component: CoursesComponent
    },
    {
        path: 'zināšanas',
        component: KnowladgeComponent
    },
    {
        path: 'ceļš',
        component: RoadComponent
    },
    {
        path: 'izaicinājumi',
        component: ChalangesComponent
    },
];

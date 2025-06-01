import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { ToDoDetailsComponent } from './components/to-do-details/to-do-details.component';
import { AddToDoReactiveFormComponent } from './components/add-to-do-reactive-form/add-to-do-reactive-form.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path: 'to-do-list', component: ToDoListComponent},
    {path: 'add-to-do-reactive-form', component: AddToDoReactiveFormComponent},
    {path: 'to-do-details', component: ToDoDetailsComponent},
    {path: 'add-to-do', component: AddToDoComponent},
];

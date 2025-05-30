import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path: 'to-do-list', component: ToDoListComponent},
    {path: 'add-to-do', component: AddToDoComponent},
];

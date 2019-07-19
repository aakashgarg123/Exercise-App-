import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { AuthComponent } from './auth/auth.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/exercises', pathMatch: 'full' },
  { path: 'exercises', component: ExerciseListComponent },
  { path: 'addexercises', component: AddExerciseComponent },
  { path: 'auth', component: AuthComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

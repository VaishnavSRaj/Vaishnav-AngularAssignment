import { NgModule } from '@angular/core';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SignupFormComponent,
  },
  {
    path: 'user-form',
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

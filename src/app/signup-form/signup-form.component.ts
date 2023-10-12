import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type Status = 'NEW_USER' | 'UPDATED_USER';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  constructor(private router: Router) {}
  btnact: boolean = false;
  login: boolean = false;
  userData: any[] = [];
  userStatus: Status = 'NEW_USER';
  userID: number;

  signupForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/),
    ]),
  });

  onSubmit() {
    console.log(this.signupForm.controls.password);

    if (this.signupForm.valid) {
      console.log(this.userStatus);

      this.userData.push(this.signupForm.value);
      this.router.navigate(['/user-form']);
    } else {
      window.alert('Login failed');
    }
  }
}

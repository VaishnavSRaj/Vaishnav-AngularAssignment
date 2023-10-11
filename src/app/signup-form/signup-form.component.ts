import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type Status = 'NEW_USER' | 'UPDATED_USER';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
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
    password: new FormControl(null, Validators.required),
  });

  onSubmit() {
    console.log(this.signupForm.controls.email);

    if (this.signupForm.valid) {
      console.log(this.userStatus);

      this.userData.push(this.signupForm.value);
    } else {
      window.alert('Login failed');
    }
    this.signupForm.reset();
  }
}

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
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  onSubmit() {
    if (this.userStatus === 'NEW_USER') {
      console.log(this.userStatus);

      this.userData.push(this.signupForm.value);
    } else {
      this.userData[this.userID] = this.signupForm.value;
    }
    this.signupForm.reset();

    this.login = true;
  }

  editFn(data: any, id: number) {
    console.log(data, id);
    this.signupForm.patchValue(data);
    this.userStatus = 'UPDATED_USER';
    console.log(this.userStatus);

    this.userID = id;
  }
}

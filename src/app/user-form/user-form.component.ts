import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type Status = 'NEW_USER' | 'UPDATED_USER';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  ngOnInit() {}
  userForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('male', [Validators.required]),
    date_of_birth: new FormControl(null, [Validators.required, this.ageCalc]),
    mobile_number: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    address: new FormControl(null),
  });

  userData = [];
  userStatus: Status = 'NEW_USER';
  userId: number;

  onSubmit() {
    console.log(this.userForm.controls.date_of_birth);

    if (this.userForm.valid && this.userStatus == 'NEW_USER') {
      this.userData.push(this.userForm.value);
      console.log(this.userData);
    } else {
      this.userData[this.userId] = this.userForm.value;
    }
    this.userForm.reset();
  }

  ageCalc(control: FormControl): { [s: string]: boolean } {
    const DOB = control.value;
    if (!DOB) {
      return null;
    }
    console.log(DOB);

    const dateParts = DOB.split('-');

    const year = parseInt(dateParts[0]);

    console.log(typeof year);

    const currentDate = new Date();
    console.log(typeof currentDate.getFullYear());
    const age: number = currentDate.getFullYear() - year;
    console.log(age);

    if (age < 18) {
      return { ageVerification: true };
    } else return null;
  }

  edit(data:any, index: number) {
    console.log(data, index);
    this.userForm.patchValue(data);
    this.userStatus = 'UPDATED_USER';
    this.userId = index;
  }
  delete(index: number) {

    this.userData.splice(index,1)
    
  }
}

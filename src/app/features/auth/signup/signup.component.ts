import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebAPIService } from '../../../core/services/web-api.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  rForm: FormGroup;
  responce = [];

  constructor(private webs: WebAPIService, private router: Router, fb: FormBuilder) {

    this.rForm = fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      MobileNo: ['', Validators.required],
      EmailId: new FormControl('', Validators.compose(
        [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      CompanyName: ['', Validators.required],
      Street: ['', Validators.required],
      StateRegion: ['', Validators.required],
      HouseNumber: [],
      City: ['', Validators.required],
      ZipCode: ['', Validators.required],
      Country: ['', Validators.required],
      JobTitle: ['', Validators.required],
      Password: ['', Validators.required],
      ConfomPassword: ['', Validators.required],
    }, { validator: this.checkPasswords });
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.Password.value;
    const confirmPass = group.controls.ConfomPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }
  checkValidForm() {
    return this.rForm.invalid || (
      this.rForm.controls.Password.value !== this.rForm.controls.ConfomPassword.value &&
      (this.rForm.controls.Password.dirty || this.rForm.controls.Password.touched ||
        this.rForm.controls.ConfomPassword.dirty || this.rForm.controls.ConfomPassword.touched));
  }
  addNewUser() {
    console.log(this.rForm.value);
    this.responce = [];
    this.webs.postUser(this.rForm.value).subscribe(
      data => {
        this.responce.push(data);
        console.log(this.responce);
        console.log(this.responce.length);
        console.log(this.responce[0]);

        if (this.responce.length > 0 && this.responce[0] === 'success') {

          this.router.navigate(['/login']);
        }
      },
      error => alert(error + ' Error Get')
    );
  }
}

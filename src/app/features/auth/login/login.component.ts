import { Component, Inject, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebAPIService } from '../../../core/services/web-api.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mainForm: FormGroup;
  responce = [];
  constructor(private webs: WebAPIService, private router: Router,
    private activatedRoute: ActivatedRoute, fb: FormBuilder) {
    this.mainForm = this.getForm();
    this.router = router;
  }

  getForm(): FormGroup {
    return new FormGroup({
      UserID: new FormControl(),
      UserName: new FormControl(),
      Password: new FormControl()
    });

  }
  SignUp() {
    this.router.navigate(['/signup']);
  }
  LoginUser() {

    // console.log(this.mainForm.value);
    this.responce = [];
    const obsdata = this.webs.getUser(this.mainForm.value).subscribe(
      data => {
        const myObjStr = JSON.parse(data.toLocaleString());


        console.log(myObjStr.Result.length);
        if (myObjStr.Result.length > 0 && myObjStr.Result[0]['EmailId'] !== 'null') {
          console.log(myObjStr.Result);
          console.log(myObjStr.Result[0]['UserID']);
          this.router.navigate(['/home']);

        } else {
          console.log('No records found');
        }
      },
      error => alert(error + ' Error Get')
    );

  }
}

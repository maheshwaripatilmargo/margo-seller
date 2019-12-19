import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-forgot-passwrod',
  templateUrl: './forgot-passwrod.component.html',
  styleUrls: ['./forgot-passwrod.component.css']
})
export class ForgotPasswrodComponent implements OnInit {
  forgotForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private authenticationService: AuthserviceService,
    private alertService: AlertService,
    public toastrService:ToastrService
  ) { }


  get f() { return this.forgotForm.controls; }

  forgotPassword() {
    // console.log('kk');

    // stop here if form is invalid
    //    if (this.log.invalid) {
    //     return;
    // }
    this.submitted = true;
    const value = {
      username: this.f.username.value,
    };
    this.authenticationService.checkForgotPassword(value).subscribe(data => {
      if (data.status) {
          this.toastrService.success("Please verify your E-mail To Reset Your Password") 
        this.router.navigateByUrl('/login');
      } else {
        this.toastrService.error("Please Enter Valid Email");
      }
    }, error => {
      console.log(error);
    });
  }
  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      username: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'cpassword')

    });

  }
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {

      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}



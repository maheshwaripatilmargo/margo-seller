import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { switchMap } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  Resetform: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private authenticationService: AuthserviceService,
    private alertService: AlertService,
    private toaster:ToastrService
  ) {}
  get f() { return this.Resetform.controls; }

 
  ngOnInit() {
    this.Resetform = this.formBuilder.group({
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'cpassword')

    });
  }


resetPassword() {
  const value = {
    password: this.f.password.value,
  };
  this.submitted = true;
  this.route.params.subscribe(dt => {
    var token = dt.token;
    this.authenticationService.resetPasswordService(token, value).subscribe(data => {
      if (data.status) {
        this.toaster.success("Changed Successfully. Please login with new password ")
        this.router.navigateByUrl('/login');
      } else {
        this.toaster.error(data.message);
      }
    }, error => {
      this.alertService.error(error);
    })
  })
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


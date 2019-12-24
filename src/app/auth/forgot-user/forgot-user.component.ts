import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { AlertService } from 'src/app/_services/alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-user',
  templateUrl: './forgot-user.component.html',
  styleUrls: ['./forgot-user.component.css']
})
export class ForgotUserComponent implements OnInit {
  forgotForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
<<<<<<< HEAD
    private authserviceService: AuthserviceService,
    private alertService: AlertService,
    public toastrService: ToastrService) { }
=======
    private authenticationService: AuthserviceService,
    private alertService: AlertService,
    public toastrService:ToastrService) { }
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c


  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required],
<<<<<<< HEAD
    });
  }
  get f() { return this.forgotForm.controls; }
  forgotUserName() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    console.log(this.f.email.value);
    let body = {
      "userEmail": this.f.email.value
    }
    this.authserviceService.forgotUserNames(body).subscribe(data => {
      if (data.status) {
        this.toastrService.success("Please verify your E-mail");
        this.router.navigateByUrl('/login');
      } else {
        this.toastrService.error("Please Enter Valid Email");
      }
    }, err => {
      console.error(err);

    })
=======
    }, {
      // validator: MustMatch('password', 'cpassword')
    });
  }
  get f() { return this.forgotForm.controls; }
  forgotUserName(){
    console.log(this.f.email.value);
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
  }
}

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
    private authenticationService: AuthserviceService,
    private alertService: AlertService,
    public toastrService:ToastrService) { }


  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'cpassword')
    });
  }
  get f() { return this.forgotForm.controls; }
  forgotUserName(){
    console.log(this.f.email.value);
  }
}

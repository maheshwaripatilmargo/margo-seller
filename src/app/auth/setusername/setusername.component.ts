import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/users/register.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';

@Component({
  selector: 'app-setusername',
  templateUrl: './setusername.component.html',
  styleUrls: ['./setusername.component.css']
})
export class SetusernameComponent implements OnInit {
  forgotForm: FormGroup;
  submitted = false;
  status: boolean = false;
  message;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private registerService: RegisterService,
    private authserviceService: AuthserviceService,
    private alertService: AlertService,
    public toastrService: ToastrService) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }
  get f() { return this.forgotForm.controls; }
  setUserName() {
    console.log(this.f.username);
  }
  submitUserName() {
    let userName = {
      "userName": this.f.username.value
    }
    this.route.params.subscribe(url => {
      let token = url.token;
      this.authserviceService.setUserNameService(userName, token).subscribe(data => {
        if (data.status) {
          this.status = data.status;
          // this.toastrService.success("Changed Successfully. Please login with new username")
          this.router.navigateByUrl(`/resetpwd/${data.token}`);
        } else {
          this.toastrService.error(data.message);
        }
      }, err => {
        console.log(err);
      });
    })


  };
  verifyUserName() {
    let userName = {
      "userName": this.f.username.value
    }
    this.submitted = true;

    this.route.params.subscribe(url => {
      let token = url.token;
      this.authserviceService.verifyUserName(userName,token).subscribe(data => {
        if(data.status){
          this.status = data.status;
          this.message = data.message;
        }else{
          this.submitted = !data.status;
          this.message = data.message;
        }
      }, err => {
        console.log(err);
      });
    });
  }
}

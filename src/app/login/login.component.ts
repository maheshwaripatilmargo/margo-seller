import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { AlertService } from '../_services/alert.service';
import { AuthserviceService } from '../services/auth/authservice.service';
// import { AdminoneService } from '../services/adminone/adminone.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    emsg
    status: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        private alertService: AlertService,
        public authService: AuthService,
        private authenticationService: AuthserviceService,
        // private adminService: AdminoneService,
        public toastrService: ToastrService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout();
        }
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    tryLogin() {
        let self = this;
        if (this.f.email.value === "undefined" && this.f.password.value === "undefined") {
            setTimeout(() => {
                this.toastrService.error("please Enter Username and Password")
            }, 1000);
        }
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        const value = {
            userName: this.f.email.value,
            password: this.f.password.value
        };

        localStorage.setItem('typeofuser', this.f.email.value);

        this.authenticationService.checkLogin(value).subscribe(data => {
            if (data.status) {
                localStorage.setItem("accesToken", data.token)
                setTimeout(() => {
                    this.toastrService.success(data.message)
                }, 1000);
                this.router.navigateByUrl('directseller/help');
            } else {
                setTimeout(function () {
                    self.status = false;
                }, 3000);
                self.status = true;
                self.emsg = data.message;
            }
        }, error => {
            setTimeout(() => {
                this.toastrService.error(error);
            }, 1000);
        });
    }
        // this.authService.doLogin(value)
        //     .then(res => {
        //         this.setUserInStorage(res);
        //         localStorage.removeItem('currentLayoutStyle');
        //         let returnUrl = '/dashboard/sales';
        //         if (this.returnUrl) {
        //           returnUrl = this.returnUrl;
        //         }
        //         this.router.navigate([returnUrl]);
        //     }, err => {
        //         this.submitted = false;

        //     });
    

    setUserInStorage(res) {
        if (res.user) {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
        } else {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
    }
}

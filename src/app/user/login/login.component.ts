import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmitLoginForm() {
    if(this.loginForm.valid){
      this.spinner.show().then(r => {});
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(next => {
        // debugger
      }, error => {
        // debugger
      }, () => {
        this.spinner.hide().then(r => {});
      })
    }
  }
}

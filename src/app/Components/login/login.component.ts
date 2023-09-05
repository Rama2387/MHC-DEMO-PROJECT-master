import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: any[] = [];

  /**
   *
   */
  constructor(
    private _fb: FormBuilder,
    private sharedService: SharedService,
    private _dbService: DatabaseService
  ) { }


  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loginForm!: FormGroup;

  formSubmitted: boolean = false;

  hideShow() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      this._dbService.getUsers().subscribe(
        (data) => {
          this.users = data;
          let foundUser = false;

          this.users.forEach((user: any) => {
            if (
              user.Name === this.loginForm.value.userName &&
              user.password === this.loginForm.value.password
            ) {
              localStorage.setItem('loggedInUser',user.Name)
              this.sharedService.login();
              foundUser = true;
            }
          });

          if (!foundUser) {
            alert('Invalid Credentials');
            // this.loginForm.get('userName')?.setValue('');
            // this.loginForm.get('password')?.setValue('');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

}

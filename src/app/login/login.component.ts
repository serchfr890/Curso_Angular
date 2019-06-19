import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading = false;
// tslint:disable-next-line: variable-name
  constructor(private _snackBar: MatSnackBar, private _api: ApiService, private _fb: FormBuilder, private _dataService: DataService) {
       this._dataService.getIsLoading().subscribe(val => {
         console.log('Isloading', val);
         this.loading = val;
       });


       this.formLogin = this._fb.group({
        username: ['', Validators.required],
        password:['', Validators.required]
      });

       this.formLogin.get('password').valueChanges.subscribe(val => {
        console.log(val);
      }, err => {

      }, () => {

      });
    }

  ngOnInit() {
  }

  login(){
    console.log('USERNSME: ', this.formLogin.get('username').value);
    console.log('PASSWORD: ', this.formLogin.get('password').value);
    this._dataService.setIsLoading(true);
    this._api.login(this.formLogin.get('username').value, this.formLogin.get('password').value).subscribe(res => {
        this._snackBar.open(res.token, 'ok', {
          duration:3000
        });
      }, err => {
        this._dataService.setIsLoading(false);
        this._snackBar.open(err.error.error, 'ok', {
          duration:3000
        });
      }, () => {
        this._dataService.setIsLoading(false);
        console.log('Ya termine');
      });
  }

  // $(".chat-button").on('click', funtion(e){
  //   e.preventDefault();
  //   $(".chat-content").slideToggle("fast");
  // });
}

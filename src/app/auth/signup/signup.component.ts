import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log(this.email,this.username,this.password)
  }
}

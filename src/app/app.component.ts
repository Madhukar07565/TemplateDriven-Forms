import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  @ViewChild('f') signUpForm: NgForm; 
  deafultQuestion = 'birthday';
  answer = '';
  genders = ['Male','Female'];

  user = {
    username: '',
    email: '',
    secretQst: '',
    ans: '',
    gender: ''
  }

  submitted = false;

  suggestUsername() {
    const suggestedName = this.signUpForm.form.value.userdata.username + this.getRandomNumebr();
    //this.signUpForm.setValue( {
    // userdata: {
    //    username: suggestedName,
    //    email: ''
    //  },
    //  secret: this.deafultQuestion,
    //  questionAns: '',
    //  gender: 'Male'
    //})
    this.signUpForm.form.patchValue({
      userdata: {
        username: suggestedName
      }
    });
  }
  getRandomNumebr() {
    return Math.floor(Math.random() * (999999 - 100000)) + 100000;
  }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userdata.username;
    this.user.email = this.signUpForm.value.userdata.email;
    this.user.secretQst = this.signUpForm.value.secret;
    this.user.ans = this.signUpForm.value.questionAns;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}

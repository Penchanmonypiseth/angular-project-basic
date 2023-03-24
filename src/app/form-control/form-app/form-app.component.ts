import { Component } from '@angular/core';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css'],
})
export class FormAppComponent {
  userInfo: any = [];
  fname: string = '';
  lname: string = '';
  email: string = '';
  country: string = '';
  a: string = '';

  onSubmit() {
    const temp = {
      firstName: this.fname,
      lastName: this.lname,
      email: this.email,
      country: this.country,
      sds: this.a,
    };

    this.userInfo.push(temp);
    console.log(this.userInfo);
  }
}

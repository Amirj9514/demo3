import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formdata: any;
  finalName: any;

  constructor() {
    this.formdata = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onClickSubmit(data: any) {
    const rndInt = this.randomIntFromInterval(1, 9);

    this.finalName = `${data.firstName} ${data.lastName}_${rndInt}`;
    console.log(this.finalName);
  }

  randomIntFromInterval(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

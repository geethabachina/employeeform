import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  employeeForm: any;
 // isDisabled: boolean;
  maxDate: Date;

  constructor(private _fb: FormBuilder) {
    //setTheme('bs3');
  }

  ngOnInit() {
    this.employeeForm = this._fb.group({
      firstName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      nationality: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      addressStayDuration: ['', Validators.required],
      spouseName: ['', Validators.required],
    });
    // this.isDisabled = true;
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.maxDate.setMonth(this.maxDate.getMonth());
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 20);
  }


}

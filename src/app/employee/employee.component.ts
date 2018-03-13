import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName : string ="Jagan";
  lastName : string ="Mode";
  gender : string ="Male";
  age : number =24;

  constructor() { }

  ngOnInit() {
  }

}

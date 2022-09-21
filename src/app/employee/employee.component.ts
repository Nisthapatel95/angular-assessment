import { Employee } from './employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeEdit: Employee;
  resetFormValue: boolean

  constructor() { }

  ngOnInit(): void {
  }

  editEmployee(empl: Employee) {
    this.employeeEdit = empl;
  }

  resetForm(reset: boolean) {
    this.resetFormValue = reset;
  }


}

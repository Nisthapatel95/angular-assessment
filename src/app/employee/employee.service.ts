import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employeeDetails: Employee[] = [
    {
      dob: new Date(),
      gender: "Female",
      id: 1,
      name: "Nistha",
      salary: 20000,
    },
   
  ];

  empDetails:Employee;

  constructor() { }
}

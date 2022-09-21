import { Employee } from './../employee.model';
import { EmployeeService } from './../employee.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Output() employeeToEdit: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() resetForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  employeeList: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.employeeDetails
  }

  editEmployee(employee: Employee) {
    this.employeeToEdit.emit(employee);
  }

  deleteEmployee(employee: Employee, ind: number) {
    this.resetForm.emit(true);
    this.employeeService.employeeDetails.splice(ind, 1);
  }

  showEmployeDetails(employee: Employee) {
    this.employeeService.empDetails = employee
  }

}

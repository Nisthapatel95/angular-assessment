import { Employee } from './../employee.model';
import { EmployeeService } from './../employee.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  employeeToEdit: Employee

  @Input() set employeeEdit(value: Employee) {
    if (value) {
      value.dob = new Date(value.dob).toISOString().slice(0, 10);
      this.employeeToEdit = value;
      this.employeeForm.patchValue(this.employeeToEdit)
    }
  }
  @Input() set resetFormValue(value: boolean) {
    if (value) {
      this.employeeForm.reset()
    }
  }
  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const alphabetRegex = /^[a-zA-Z]*$/;
    const numberRegex = /^\d+$/;
    this.employeeForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      gender: [null, [Validators.required, Validators.pattern(alphabetRegex)]],
      dob: [null, Validators.required],
      salary: [null, [Validators.required, Validators.pattern(numberRegex)]]
    });
  }

  saveEmployeeDetails() {
    if (this.employeeForm.valid) {
      if (this.employeeForm.value.id) {
        const index = this.employeeService.employeeDetails.findIndex(x => x.id == this.employeeForm.value.id);
        this.employeeService.employeeDetails[index] = this.employeeForm.value
      } else {
        const finalEmployeeDetails = { ...this.employeeForm.value, id: this.employeeService.employeeDetails.length + 1 };
        this.employeeService.employeeDetails.push(finalEmployeeDetails);
      }
      this.employeeForm.reset()
    }
    else {
      console.log('form not Valid')
    }
    console.log(this.employeeService.employeeDetails)
  }

  resetForm() {
    this.employeeForm.reset();
  }
}

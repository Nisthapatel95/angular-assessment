import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '', component: EmployeeComponent,
  }, {
    path: 'detail', component: EmpDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

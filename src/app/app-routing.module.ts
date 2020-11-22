import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';

const routes:Routes =[
  {path:'create-student',component:CreateStudentComponent},
  {path:'edit-student',component:EditStudentComponent},
  {path:'list-students',component:ListStudentsComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

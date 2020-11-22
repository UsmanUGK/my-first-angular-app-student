import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public studentName:any='';
  public studentMobileNumber:any='';
  public studentAddress:any='';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{

  }

}

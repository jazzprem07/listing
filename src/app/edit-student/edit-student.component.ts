import { Component } from '@angular/core';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule,MatDatepickerToggle } from '@angular/material/datepicker';
import { StudentService } from '../services/student.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,
    MatInputModule,MatOptionModule,
    MatSelectModule,MatDatepickerModule,
    MatDatepickerToggle,MatNativeDateModule,
    FormsModule,CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})

export class EditStudentComponent {
  id: any;
dob: any;
section: any;
class: any;
name: any;

  constructor(private stuserve:StudentService,private route: ActivatedRoute,private router :Router){

  }
  contactEdit(data:any){  
     this.stuserve.stuEdit(data.value);
     this.router.navigate(["/"]);
  }
  
  student:any;

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];
  this.student=    this.stuserve.getStudentById(this.id);

  });
 }
  getStulist(){
    return this.stuserve.getStuList();
  }
  nav(){

  }
}

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

// interface add{
//   id:number;
//   name:string;
//   class:number;
//   section:string;
//   dob:string;
// }
@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,
    MatInputModule,MatOptionModule,
    MatSelectModule,MatDatepickerModule,
    MatDatepickerToggle,MatNativeDateModule,
    FormsModule,CommonModule
  
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})


export class AddStudentComponent {
    constructor(private reg:StudentService)
    {

    }
    // stuList: add[] = [];
  //  register(){
  //    return this.reg.register();
  // }
  // x=this.stuList;
  
    contact(data:NgForm){
       // console.log(data);
      //  this.x=data.value.id;
      //  this.x.name=data.value.name;
      //  this.x.class=data.value.class;
      //  this.x.section=data.value.section;
      //  this.x.dob=data.value.dob;

        return this.reg.register(data.value);

    }
    
}

import { Component, Inject } from '@angular/core';
import { StudentService } from '../services/student.service';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {  MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule,MatDatepickerToggle } from '@angular/material/datepicker';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,
    MatInputModule,MatOptionModule,
    MatSelectModule,MatDatepickerModule,
    MatDatepickerToggle,MatNativeDateModule,
    FormsModule,CommonModule],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css'
})
export class StudentViewComponent {
[x: string]: any;
    
  constructor(private studentService:StudentService,public dialogRef: MatDialogRef<any> , @Inject(MAT_DIALOG_DATA) public data: any,){}
   
  view(){
        return this.studentService.openView(this.data);
    }
}


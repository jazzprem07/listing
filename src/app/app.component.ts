import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { StudentService } from './services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,CommonModule,FormsModule,RouterLink]
})
export class AppComponent {

  title = 'listing';
  constructor(private studentService: StudentService ,
    private router:Router){
      
  }
  
  getStulist(){
    return this.studentService.getStuList();
  }
  openRegister(){
     return this.studentService.openRegister();
  }
  delete(item:any){
    console.log(item)
    return this.studentService.delete(item);
  }
  stuEdit(item:any){
    //return this.studentService.stuEdit(item);
    console.log(item);
    this.router.navigate(["/edit",item.id]);
  }
  }


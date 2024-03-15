import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import stuJson from "../../assets/Stu.json";
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { RouterLink } from '@angular/router';
import { IfStmt } from '@angular/compiler';
import { StudentViewComponent } from '../student-view/student-view.component';
import {Location} from '@angular/common'; 

class STU {
  id!: number;
  name!: string;
  class!: number;
  section!: string;
  dob:string | undefined;

}


@Injectable({
  providedIn: 'root'
})

export class StudentService {
  stuList:STU[]=stuJson;
 
constructor(private _diaalog: MatDialog,private location: Location){
      console.log(this.stuList);
}
//register
  register(stuData:any){  
    console.log(stuData);
    this.stuList.push(stuData);
     }
  //table list
  getStuList(){
    return this.stuList;
  }
  //open popup
  // openRegister(){
  //   this._diaalog.open(AddStudentComponent);
  // }
  openView(item:any){
    let i = 0;
    console.log(item);
    for (i; i < this.stuList.length; i++) {
      if(item.id==this.stuList[i].id)
      {
       
        this._diaalog.open(StudentViewComponent ,{data:this.stuList[i]});
        
      }
    }
    //  return null;
  }
  //delete
  delete(item:any){
    this.stuList = this.stuList.filter((stuList) => stuList.id !== item.id);
  }
  //edit
  //uppdate
  update:any=[];
  stuEdit(item:any){
      this.update=item;
      console.log(this.update);
      for (let i = 0; i < this.stuList.length; i++) {
        if(item.id==this.stuList[i].id)
        {
          this.stuList[i]=this.update;
         
          return this.stuList[i];
          
        }
      }
      return this.update;

  }
   //get id values 
  getStudentById(id:any){
    for (let i = 0; i < this.stuList.length; i++) {
          if(id==this.stuList[i].id)
          {
            return this.stuList[i];
          }
    }
    return null;
    }
  }


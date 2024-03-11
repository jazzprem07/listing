import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import stuJson from "../../assets/Stu.json";
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { RouterLink } from '@angular/router';
import { IfStmt } from '@angular/compiler';

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
constructor(private _diaalog: MatDialog){
      console.log(this.stuList);
}
  register(stuData:any){
    console.log(stuData);

    this.stuList.push(stuData);
    this._diaalog.closeAll();
  }
  
  getStuList(){
    return this.stuList;
  }
  openRegister(){
    this._diaalog.open(AddStudentComponent);
  }

  delete(item:any){
    // console.log(item.id+"qwertyuioplkjhg")
    // console.log(item.id+1+"qwertyuioplkjhg")
    this.stuList = this.stuList.filter((stuList) => stuList.id !== item.id);
   // this.stuList.splice(i);
   console.log(this.stuList)
  }


  //edit
  update:any=[];
  stuEdit(item:any){
      // this.stuList.(item.name);
      this.update=item;
      console.log(this.update);
      for (let i = 0; i < this.stuList.length; i++) {
        if(item.id==this.stuList[i].id)
        {
          this.stuList[i]=this.update;
          return this.stuList[i];
        }
   }
  // return null;
  // }
      // if (item.id==this.stuList) {
        
      // }
      
      return this.update;

  }
    
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


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from './model/Staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  url:string;
  staffArr:Staff[];
  staff:Staff;
  constructor(private http:HttpClient) { 
   this.url="http://localhost:3004/Management";
   this.staffArr=[];
   this.staff=new Staff();
  }
  insertStaff(staff:Staff){
    this.http.post<Staff>(this.url,staff).subscribe();
    return "Staff Details Added";
  }
  updateStaff(staff:Staff){
    this.http.put<Staff>(this.url+"/"+staff.id,staff).subscribe();
    return "Staff Details Updated";
  }
  deleteStaff(staffId:number){
    this.http.delete<Staff>(this.url+"/"+staffId).subscribe();
    return "Staff Details Deleted";
   }
   findallStaff(){
    this.http.get<Staff[]>(this.url).subscribe(data =>this.staffArr=data);
    return this.staffArr;
   }
   findStaff(staffId:number){
    this.http.get<Staff>(this.url+"/"+staffId).subscribe(data =>this.staff=data);
    return this.staff;
   }
}

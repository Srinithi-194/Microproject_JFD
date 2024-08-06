import { Component } from '@angular/core';
import { Staff } from './model/Staff';
import { StaffService } from './staff.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Management';
  result:string;
  staff:Staff;
  staffArr:Staff[];
  flag:boolean;
  constructor(private service:StaffService){
    this.staff=new Staff();
    this.result="";
    this.staffArr=[];
    this.flag=false;
  }
 insertStaff(data:any){
    this.staff.staffName=data.staffName;
    this.staff.staffNo=data.staffNo;
    this.staff.staffAdd=data.staffAdd;
    this.staff.staffQuali=data.staffQuali;
    this.staff.staffSub=data.staffSub;
    this.staff.staffJoin=data.staffJoin;
    this.staff.staffMail=data.staffMail;
    this.staff.id=data.staffId;
    this.staff.staffExperience=data.staffExperience;    
    this.staff.staffCertificate=data.staffCertificate;    
    this.staff.staffSalary=data.staffSalary;
    this.result=this.service.insertStaff(this.staff);
    alert(data.staffName+""+data.staffNo+""+data.staffAdd+""+data.staffQuali+""+data.staffSub+""+data.staffJoin+""+data.staffMail+""+data.id+""+data.staffExperience+""+data.staffCertificate+""+data.staffSalary);

  }
  updateStaff(data:any){
    this.staff.staffName=data.staffName;
    this.staff.staffNo=data.staffNo;
    this.staff.staffAdd=data.staffAdd;
    this.staff.staffQuali=data.staffQuali;
    this.staff.staffSub=data.staffSub;
    this.staff.staffJoin=data.staffJoin;
    this.staff.staffMail=data.staffMail;
    this.staff.id=data.staffId;
    this.staff.staffExperience=data.staffExperience;    
    this.staff.staffCertificate=data.staffCertificate;    
    this.staff.staffSalary=data.staffSalary;
    this.result=this.service.updateStaff(this.staff);
    alert(data.staffName+""+data.staffNo+""+data.staffAdd+""+data.staffQuali+""+data.staffSub+""+data.staffJoin+""+data.staffMail+""+data.id+""+data.staffExperience+""+data.staffCertificate+""+data.staffSalary);
  }
  deleteStaff(data:any){
    this.result=this.service.deleteStaff(data.staffId);
  }
  findallStaff(){
    this.staffArr=this.service.findallStaff();
    this.flag=true;
  }
  findStaff(data:any){
    this.staff=this.service.findStaff(data.staffId);
    this.result=this.staff.staffName+" "+this.staff.staffNo+" "+this.staff.staffAdd+" "+this.staff.staffQuali+" "+this.staff.staffSub+" "+this.staff.staffJoin+" "+this.staff.staffMail+" "+this.staff.id+" "+this.staff.staffExperience+" "+this.staff.staffCertificate+" "+this.staff.staffSalary;
  }
}

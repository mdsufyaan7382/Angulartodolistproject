import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ApiService} from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  values: string[] = ['Value1','Value2','Value3','Value4'];

   users:any;
  
   constructor(private route :  Router , private userData:ApiService)
   {
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users= data
    });
   }
   getUserFormData(data:any){
  //  console.warn(data)
   this.userData.saveUsers(data).subscribe((result)=>{
    console.warn(result);
    alert("users add successfully");
   })
   }

  ngOnInit() :void{
    
  }
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import{ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  // users:any;
  
   constructor(private route :  Router ){}
  //  , private apiData:ApiService)
  //  {
  //   apiData.users().subscribe((data)=>{
  //     console.warn("data",data);
  //     this.users= data
  //   });
  //  }
   

  btn()
  {
        this.route.navigate(['login'])
  }
  goToLogin(){
    this.route.navigate(['/login'])
  }
  goToDashboard(){
    this.route.navigate(['/dashboard'])
  }

}

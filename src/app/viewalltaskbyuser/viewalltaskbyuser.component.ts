import { Component } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Task } from '../task';

@Component({
  selector: 'app-viewalltaskbyuser',
  templateUrl: './viewalltaskbyuser.component.html',
  styleUrls: ['./viewalltaskbyuser.component.css']
})
export class ViewalltaskbyuserComponent {
  service: TaskserviceService;
  task : Task[];

  constructor(service: TaskserviceService){
    this.service = service;
    this.task = [];
  }
  ngOnInit(): void {
    this.service.viewAllTask().subscribe((data) => (this.task = data));
  }
delete(id:number):void{
  this.service.delete(id).subscribe(task => {
    window.location.reload();
  });
  
}
}

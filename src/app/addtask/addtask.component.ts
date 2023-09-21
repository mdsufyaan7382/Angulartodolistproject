import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskserviceService } from '../taskservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
    service:TaskserviceService;
    task: Task;
    constructor(service:TaskserviceService,private route:Router){
      this.service = service;
      this.task = new Task();
    }
    getTaskDetail(){
      this.service.addTask(this.task).subscribe(tasks=> {
      this.redirectToView();
      });
      
      
    }
    redirectToView(){
      this.route.navigate(['viewalltask']).then(()=>{
        window.location.reload();
      });
    }
  
  }


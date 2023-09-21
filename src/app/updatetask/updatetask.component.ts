import { Component } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {
  service:TaskserviceService;
  task: Task;
  constructor(service:TaskserviceService,private router:Router,private route: ActivatedRoute){
    this.service = service;
    this.task = new Task();
  }

  ngOnInit(): void {
    this.getTaskDetails();
  }

  updateTaskDetails(){
    this.service.updateTask(this.task).subscribe(tasks =>{ this.task = tasks;
      this.redirectToView();
    }   
      );
    
    
  }


  getTaskDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.service.getAllTask(id)
      .subscribe(tasks => this.task = tasks);
      console.log(this.task);
  }
  redirectToView(){
    this.router.navigate(['viewalltask']).then(()=>{
      window.location.reload();
    });
  }

}


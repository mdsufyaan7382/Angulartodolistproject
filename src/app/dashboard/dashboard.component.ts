import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  values: string[] = ['Value1','Value2','Value3','Value4'];

  constructor() {}

  ngOnInit() :void{
    
  }
}


import { Time } from "@angular/common";

export class Task {
   
    taskid: number;
	taskdescription:string;
	tasktargetdate:Date;
	// tasktargettime:Time;
	username:string;
    constructor(){
        this.taskid= 0;
        this.taskdescription = '';
        this.tasktargetdate =new Date("MM-dd-yyyy");
        this.username = '';
    }
}

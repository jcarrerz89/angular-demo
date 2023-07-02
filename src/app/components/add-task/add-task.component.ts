import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/Tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() text: string = '';
  @Input()day: string = '';
  @Input() reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe((value) => {
          this.showAddTask = value;
      })
  }
  

  ngOnInit(): void {
    
  }

  onSubmit(): void { 
    if (!this.text || this.text == '') { 
      alert('please add a task');
      return;
    }

    const task: Task = { 
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

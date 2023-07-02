import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  constructor()  {}

  @Input() task: Task = {} as Task;
  faTimes = faTimes;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  onDelete(): void { 
    this.onDeleteTask.emit(this.task); 
  }

  onToggle() : void { 
    this.onToggleReminder.emit(this.task);
  }
}

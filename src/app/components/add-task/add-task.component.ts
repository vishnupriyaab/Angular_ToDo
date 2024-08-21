import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../tasks';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
// export class AddTaskComponent implements OnInit {
//   @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
//   text: string;
//   day: string;
//   reminder: boolean = false;

//   constructor() {}
//   ngOnInit(): void {}

//   onSubmit() {
//     if (!this.text) {
//       alert('please add a task!');
//       return;
//     }

//     const newTask = {
//       text: this.text,
//       day: this.day,
//       reminder: this.reminder,
//     };

//     this.onAddTask.emit(newTask);
//     this.text = '';
//     this.day = '';
//     this.reminder = false;
//   }
// }
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

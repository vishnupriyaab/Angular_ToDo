import { Component, Input, OnInit } from '@angular/core';
import { TASKS } from "../mock-tasks";
import { Task } from "../../tasks";
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks:Task[] = TASKS;
  constructor(){}
  ngOnInit(): void {}

}

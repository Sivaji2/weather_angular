// todo-list.component.ts

import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TodoListComponent {
  @Input() weatherData: any;
  todoList: string[] = [];

  formatWeatherData(weatherData: any): string {
    if (weatherData) {
      const cityName = weatherData.name;
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      return `${cityName}, Temperature: ${temperature}, Description: ${description}`;
    }
    return '';
  }

  addTask() {
    if (this.weatherData) {
      const formattedWeatherData = this.formatWeatherData(this.weatherData);
      this.todoList.push(formattedWeatherData);
    }
  }

  deleteTask(index: number) {
    this.todoList.splice(index, 1);
  }
}

// todo.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private taskAddedSource = new Subject<string>();

  taskAdded$ = this.taskAddedSource.asObservable();

  addTask(task: string) {
    this.taskAddedSource.next(task);
  }
}

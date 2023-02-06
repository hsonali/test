import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos:any;
// checked: boolean = false;
  constructor(private ts: TodoService) { }

  ngOnInit(): void {
    this.ts.getTodoList().subscribe(res => {
      this.todos =  res;
      
    });
    console.log(this.todos);
  }

  
}

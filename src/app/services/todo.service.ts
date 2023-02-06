import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
  }
}

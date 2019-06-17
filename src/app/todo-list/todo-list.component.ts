import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public listTodos = [];

  constructor(public server: ServersService) { }
  ngOnInit() {
    this.getList()
  }
  //待办列表
  getList(){
    //从sessionStorage获取待办列表
    this.listTodos = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      var key = sessionStorage.key(i);
      if (key.indexOf('key') > -1) {
        this.listTodos.push(
          {
            createTime: key.substring(3),
            content: sessionStorage.getItem(key)
          }
        )
      }
    }
  }
  //删除待办
  removeTodo(key){
    let sureRemove = confirm('确定删除待办吗？');
    if (sureRemove){
      sessionStorage.removeItem('key' + key);
      this.getList();
      setTimeout(() => {
        this.server.msg = '删除成功！';
      }, 500);
      setTimeout(() => {
        this.server.msg = '';
      }, 2000);
    }
  }
}

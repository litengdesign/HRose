import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  public todoObj:any = {};
  constructor(public router: ActivatedRoute, public server: ServersService) { }

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.todoObj.key = 'key' + params['key'];
      this.todoObj.content = sessionStorage.getItem(this.todoObj.key);
    })
  }
  submitTodo() {
    if (this.todoObj.content == '') {
      this.server.msg = '请输入事件内容！';
    } else {
      // 处理时间key
      let time = new Date();
      sessionStorage.setItem(this.todoObj.key, this.todoObj.content);
      this.server.msg = '更新成功！';
    }
    setTimeout(() => {
      this.server.msg = '';
    }, 2000);
  }

}

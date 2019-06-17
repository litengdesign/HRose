import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  //定义变量
  public todoContent = '';
  constructor(public server: ServersService) { }
  ngOnInit() {
  }
  //新增事件
  submitTodo(){
    if (this.todoContent ==''){
      this.server.msg = '请输入事件内容！';
    }else{
      // 处理时间key
      let time = new Date();
      let month = time.getMonth()+1;
      let formatTime = time.getFullYear() + '-' + month + '-' + time.getDay() + ' '+time.getHours()+':'+time.getMinutes()
      let key = 'key' + formatTime;
      sessionStorage.setItem(key, this.todoContent);
      this.server.msg = '新增成功！';
    }
    setTimeout(() => {
      this.server.msg = '';
    }, 2000);
  }

}

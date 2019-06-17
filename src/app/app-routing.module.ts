import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { LoginComponent } from './login/login.component';
//ROUTER CONFIG
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'addTodo', component: AddTodoComponent },
  { path: 'editTodo', component: EditTodoComponent },
  { path: 'listTodo', component: TodoListComponent },
  { path: 'dashboard', component: MenuPageComponent },
  { path: 'login', component: LoginComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContainerComponent } from './product-page/container/container.component';
import { ProductComponent } from './product-page/product/product.component';
import { NavComponent } from './product-page/nav/nav.component';
import { SearchBarComponent } from './product-page/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { setBackgroundDirective } from './custom-directive/setBackground.directive';
import { HighlightDirective } from './custom-directive/highlight.directive';
import { HoverHostlistnerDirective } from './custom-directive/hover-hostlistner.directive';
import { TodoComponent } from './todo-app/todo/todo.component';
import { HeaderComponent } from './todo-app/header/header.component';
import { ButtonComponent } from './todo-app/button/button.component';
import { TasksContentComponent } from './todo-app/tasks-content/tasks-content.component';
import { TasksItemsComponent } from './todo-app/tasks-items/tasks-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTasksComponent } from './todo-app/add-tasks/add-tasks.component';
import { FormAppComponent } from './form-control/form-app/form-app.component';
import { MostLikesProductComponent } from './most-likes-product/most-likes-product/most-likes-product.component';
import { MostLikeDirective } from './custom-directive/most-like.directive';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductComponent,
    NavComponent,
    SearchBarComponent,
    setBackgroundDirective,
    HighlightDirective,
    HoverHostlistnerDirective,
    TodoComponent,
    HeaderComponent,
    ButtonComponent,
    TasksContentComponent,
    TasksItemsComponent,
    AddTasksComponent,
    FormAppComponent,
    MostLikesProductComponent,
    MostLikeDirective,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './product-page/container/container.component';
import { ProductComponent } from './product-page/product/product.component';
import { NavComponent } from './product-page/nav/nav.component';
import { SearchBarComponent } from './product-page/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { setBackgroundDirective } from './custom-directive/setBackground.directive';
import { HighlightDirective } from './custom-directive/highlight.directive';
import { HoverHostlistnerDirective } from './custom-directive/hover-hostlistner.directive';
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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

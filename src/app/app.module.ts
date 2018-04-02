import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BgchangerDirective } from './directive/bgchanger/bgchanger.directive';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    BgchangerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

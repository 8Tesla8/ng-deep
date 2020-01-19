import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from './control/control.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SplitButtonModule } from 'primeng/splitbutton';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    MainComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,

    SplitButtonModule,
    RouterModule.forRoot([{ path: "", component: AppComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

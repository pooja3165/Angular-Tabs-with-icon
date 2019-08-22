import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '../lib/mobiscroll/js/mobiscroll.angular.min.js';
import { AppComponent } from './app.component';
import { TabSampleComponent } from './tab-sample/tab-sample.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule } from "igniteui-angular";


@NgModule({
  declarations: [
    AppComponent,
    TabSampleComponent,
 
  ],
  imports: [
    BrowserModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

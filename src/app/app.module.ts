import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ViralLoopsModule } from './viral-loops/viral-loops.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    ViralLoopsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

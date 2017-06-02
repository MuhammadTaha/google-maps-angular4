import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    // CommonModule,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3iOKgL5F3C5luaBh5Hhbj1pa2TCJqIhw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

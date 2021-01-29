import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { InternationalComponent } from './international/international.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PhotoGalleryComponent,
    InternationalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

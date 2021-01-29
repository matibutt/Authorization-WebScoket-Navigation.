import { I18nModule } from './i18n/i18n.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import "leaflet/dist/leaflet.css";
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { LoadingScreenInterceptor } from "./loading-screen/loading-screen.interceptor";
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
<<<<<<< HEAD
import { InternationalComponent } from './international/international.component';
=======
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NominatimService} from './services/nominatim.service';
import { HappyMapComponent } from './happy-map/happy-map.component';
import { GeocodingComponent } from './geocoding/geocoding.component';
import { MapComponent } from './map/map.component';
import { MapPointFormComponent } from './map-point-form/map-point-form.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { InternationalComponent } from './international/international.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { LoginComponent } from './login/login.component';
import { MultiLanguageComponent } from './multi-language/multi-language.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChatComponent } from './chat/chat.component';



>>>>>>> ac474a36673374ba193a038b4fe82b4d3fffccf9

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    routingComponents,
    PhotoGalleryComponent,
    LoadingScreenComponent,
    MarqueeComponent,
    NavBarComponent,
    HappyMapComponent,
    GeocodingComponent,
    MapComponent,
    MapPointFormComponent,
    ResultListComponent,
    ResultsListComponent,
    InternationalComponent,
    LoginComponent,
    MultiLanguageComponent,
    SignInComponent,
    ChatComponent,
<<<<<<< HEAD
    PhotoGalleryComponent,
    InternationalComponent
=======


>>>>>>> ac474a36673374ba193a038b4fe82b4d3fffccf9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    I18nModule,

  ],
  exports: [ ReactiveFormsModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingScreenInterceptor,
    multi: true
  },NominatimService],
  bootstrap: [AppComponent]
})
export class AppModule { }

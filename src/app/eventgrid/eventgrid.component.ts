import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngmodule/material-carousel';
@Component({
  selector: 'app-eventgrid',
  templateUrl: './eventgrid.component.html',
  styleUrls: ['./eventgrid.component.css']
})
export class EventgridComponent implements OnInit {
  public slidesList = new Array<never>(5); 
  imagesList = [{'image': '../../assets/images/corridor.jpg'}, {'image': '../../assets/THD_images/people.jpg'},{'image': '../../assets/THD_images/people_2.jpg'}, {'image': '../../assets/THD_images/coffee_study.jpg'}, {'image': '../../assets/THD_images/studying.png'}];
  public showContent = true;

  public parentHeight = '450px';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = false;
  public proportion = 25;
  public slideHeight = '450px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }

}

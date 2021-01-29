import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit {
  public name = "Deggendorf institute of technology has decided to extend the study period for all students due to the ongoing COVID-19 pandemic. For Further Reference, see the Primuss Portal"
  constructor() {};

  ngOnInit(): void {};

}

import { Component, OnInit } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrls: ['./multi-language.component.css']
})
export class MultiLanguageComponent implements OnInit {

  ngOnInit(): void {
    console.log("MultiLanguageComponent OnInit: "+ this.translate.currentLang);
    switch(this.translate.currentLang){
      case 'de':
        this.langView = 'Sprache'
        this.currLangViewValue = 'DE'
        break;

      default:
        this.langView = 'English'
        this.currLangViewValue = 'EN'
        break;
    }
    console.log("MultiLanguageComponent OnInit: "+ this.currLangViewValue)
  }
  constructor(public translate : TranslateService) { }

  languages: Languages [] =[
    { value: 'en', viewValue: 'EN' },
    { value: 'de', viewValue: 'DE' }
  ]


  langView = 'Language'; // default language is English
  currLangViewValue = 'EN';

  changeLanguage(l: string): void {
    this.translate.use(l);
    console.log("changeLanguage: " + l);
    switch (l) {
      case 'de': this.langView = 'Sprache'; break;
      default: this.langView = 'Language'
    }
  }

}

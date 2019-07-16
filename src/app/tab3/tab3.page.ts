import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  slides: { img: string } [] = [

    {
      img: '../assets/img/TheBrowmCrumbs_Slider_Image_1.jpg',
    },
    {
      img: '../assets/img/TheBrowmCrumbs_Slider_Image_2.jpg',
    },
    {
      img: '../assets/img/TheBrowmCrumbs_Slider_Image_3.jpg',
    },
    {
      img: '../assets/img/TheBrowmCrumbs_Slider_Image_4.jpg',
    }
  ];

  constructor() {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.page.html',
  styleUrls: ['./cakes.page.scss'],
})
export class CakesPage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit() {}


  loginButton()
  // tslint:disable-next-line: one-line
  {
    this.router.navigateByUrl('/tabs');

  }

}

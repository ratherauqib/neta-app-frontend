import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      jQuery('.my-toggle ').click(function () {
        jQuery(this).toggleClass('open');
        jQuery('body').toggleClass('open');
    });
    jQuery('button.search-btn').click(function () {
        jQuery('header').toggleClass('open');
    });
    jQuery(window).scroll(function () {
      if (jQuery(window).scrollTop() >= 30) {
          jQuery('header').addClass('fixed');
      } else {
          jQuery('header').removeClass('fixed');
      }
    });
  }

}

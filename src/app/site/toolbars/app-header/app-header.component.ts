import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.my-toggle ').click(function () {
      $(this).toggleClass('open');
      $('body').toggleClass('open');
  });
  $('button.search-btn').click(function () {
      $('header').toggleClass('open');
  });
  }

}

import { Component, OnInit } from '@angular/core';


declare var jQuery:any;
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.my-toggle ').click(function () {
      jQuery(this).toggleClass('open');
      jQuery('body').toggleClass('open');
  });
  jQuery('button.search-btn').click(function () {
      jQuery('header').toggleClass('open');
  });
  }

}

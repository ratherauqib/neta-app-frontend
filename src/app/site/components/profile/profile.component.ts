import { Component, OnInit } from '@angular/core';
import { CandidateProfileService } from '../../../shared/services';
import { ActivatedRoute } from '@angular/router';
import { candidateProfileModel } from './profilemodel';

declare var jQuery: any;
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: candidateProfileModel;//add model
  CANDIDATE_ID = "ce9d1130-b765-4e1b-a65b-f3cc23283db0";
  CONSTITUENCY_ID = "52d40fe8-1490-421e-9dbe-08b2c13fb251";
  info: any;
  cloudNaryUrl = "http://res.cloudinary.com/neta-dev/image/upload/";
  contact_info: any;
  party_info: any;
  constructor(private leaderProfile: CandidateProfileService, route: ActivatedRoute) {
    this.CANDIDATE_ID = route.snapshot.params.can_id || this.CANDIDATE_ID;
    this.CONSTITUENCY_ID = route.snapshot.params.con_id || this.CONSTITUENCY_ID;
  }

  ngOnInit() {
    this.leaderProfile.getCanditateProfile(this.CANDIDATE_ID, this.CONSTITUENCY_ID).subscribe(res => {
      console.log("Profile", res);
      // console.log("info",res.data.info);
      this.info = res.data.info;
      this.contact_info = res.data.contact_info;
      this.party_info = res.data.party_and_support_info;
      console.log("Contact_info", this.party_info);
    });





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

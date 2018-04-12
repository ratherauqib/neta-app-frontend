import { Component, OnInit } from '@angular/core';

import { Candidate } from './../../../shared/models/candidate';
import { CandidateProfileService } from './../../../shared/services/candidate-profile.service';
import { CloudnaryService } from './../../../shared/services/cloudnary.service';
import { CondidatesService } from './../../../shared/services/condidates.service';
import { InfluencersService } from './../../../shared/services/influencers.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  influencers:any=[];
  popularInfluencers:any=[];
  candidates:Candidate[];
  cUrl: string = '';
  constituency_id: string = '44443cf7-51ad-422d-a9c6-11a322d5797a';
  loading:boolean = false;

  constructor(
    private candidateService: CondidatesService,
    private cloudnaryService: CloudnaryService,
    private profileService: CandidateProfileService,
    private influencerService:InfluencersService
  ) {
    this.cUrl = cloudnaryService.cloudnaryUrl;
  }

  ngOnInit() {
    this.showCandidates();
    this.showInfluencers();
  }

  showCandidates(){
    this.loading = true;
    this.candidateService.getAllCandidates().subscribe(data => {
      this.loading = false;
      this.candidates = data.json().data;
      console.log(this.candidates);
    })
  }


  showInfluencers(){
    this.loading = true;
   
    this.influencerService.getAllInfluencers()
    .subscribe(data => {
      let count = 0;
      this.loading = false;
      this.influencers = data.json().data;
      console.log('All influencers:',this.influencers);

      this.influencers.forEach(element => {
        if(count<4){
          this.popularInfluencers.push(element);
          count++;
        }
      });
    console.log('Popular influencers:',this.popularInfluencers);
    })
  }

 


  onProfileView(id) {
    console.log('hello:' + id);
    this.profileService.navigateCandidate(id, this.constituency_id);
  }
}

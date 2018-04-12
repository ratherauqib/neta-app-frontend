import { Candidate } from './../../../shared/models/candidate';

import { CandidateProfileService } from './../../../shared/services/candidate-profile.service';
import { CloudnaryService } from './../../../shared/services/cloudnary.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CondidatesService } from './../../../shared/services/condidates.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-voting-booth',
  templateUrl: './voting-booth.component.html',
  styleUrls: ['./voting-booth.component.css']
})
export class VotingBoothComponent implements OnInit {

  tab: any = {
		mla_candidates: true,
		mp_candidates: false,
		local_bodies: false,
	}
  loading:boolean = false;
  candidates:Candidate[];
  cUrl: string = '';
  constituency_id: string = '44443cf7-51ad-422d-a9c6-11a322d5797a';
  isActiveName:boolean = false;
  isActiveVotes:boolean = true;

  

  constructor(
    private candidateService: CondidatesService,
    private cloudnaryService: CloudnaryService,
    private profileService: CandidateProfileService,
  ) {
    this.cUrl = cloudnaryService.cloudnaryUrl;
  }

  ngOnInit() {
    this.showCandidates();
  }

  showCandidates(){
    this.loading = true;
    this.candidateService.getAllCandidates().subscribe(data => {
      this.loading = false;
      this.candidates = data.json().data;
      console.log(this.candidates);
    })
  }

  onProfileView(id) {
    console.log('hello:' + id);
    this.profileService.navigateCandidate(id, this.constituency_id);
  }

  sortByName(){
    this.isActiveName = true;
    this.isActiveVotes = false;
    this.candidates = _.sortBy(this.candidates,o=>o.candidate_name);
  }
  sortByVotes(){
    this.isActiveVotes = true;
    this.isActiveName = false;
    this.candidates = _.sortBy(this.candidates,o=>o.votes);
  }

  switchTab(type) {
		for (const key in this.tab) {
			if (this.tab.hasOwnProperty(key))  
				this.tab[key] = false;
		}
		this.tab[type] = true;
  }
 
}

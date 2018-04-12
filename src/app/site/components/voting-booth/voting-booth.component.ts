import { CandidateProfileService } from './../../../shared/services/candidate-profile.service';
import { CloudnaryService } from './../../../shared/services/cloudnary.service';
import { Component, OnInit } from '@angular/core';
import { CondidatesService } from './../../../shared/services/condidates.service';

@Component({
  selector: 'app-voting-booth',
  templateUrl: './voting-booth.component.html',
  styleUrls: ['./voting-booth.component.css']
})
export class VotingBoothComponent implements OnInit {

  candidates:any=[];
  cUrl:string = ''
  constituency_id:string = '44443cf7-51ad-422d-a9c6-11a322d5797a';
  constructor(
    private candidateService:CondidatesService,
    private cloudnaryService:CloudnaryService,
    private profileService:CandidateProfileService,
  )  { 
        this.cUrl = cloudnaryService.cloudnaryUrl;
     }

  ngOnInit() {
    this.candidateService.getAllCandidates().subscribe(data=>{
        this.candidates = data.json().data; 
        console.log(this.candidates);
    })
  }

  onProfileView(id){
    console.log('hello:'+id);
    this.profileService.navigateCandidate(id,this.constituency_id);
  }
}

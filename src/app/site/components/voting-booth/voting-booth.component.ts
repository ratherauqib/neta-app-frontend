import { Component, OnInit } from '@angular/core';
import { CondidatesService } from './../../../shared/services/condidates.service';

@Component({
  selector: 'app-voting-booth',
  templateUrl: './voting-booth.component.html',
  styleUrls: ['./voting-booth.component.css']
})
export class VotingBoothComponent implements OnInit {

  candidates:any=[];
  constructor(private candidateService:CondidatesService) { }

  ngOnInit() {
    this.candidateService.getAllCandidates().subscribe(data=>{
        this.candidates = data.json().data; 
        console.log(this.candidates);
    })
  }
}

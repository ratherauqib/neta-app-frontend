import { CondidatesService } from './../../../shared/services/condidates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private candidateService:CondidatesService) { }

  ngOnInit() {
    this.candidateService.getAllCandidates().subscribe(data=>{
      console.log(data)
    })
  }

}

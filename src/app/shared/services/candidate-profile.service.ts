import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
// import { Http } from '@angular/http';


@Injectable()
export class CandidateProfileService extends BaseService {

  constructor(private http: Http,private router:Router) {
    super();
  }
  getCanditateProfile(CANDIDATE_ID, CONSTITUENCY_ID) {
    return this.http.get(this._url + "/candidates/" + CANDIDATE_ID + "/?constituency_id=" + CONSTITUENCY_ID, this.get_options()).map(res => res.json());
  }

  navigateCandidate(CANDIDATE_ID, CONSTITUENCY_ID){
    console.log('navigating',CANDIDATE_ID);
     this.router.navigate(['/profile',CANDIDATE_ID,CONSTITUENCY_ID]);
    //let idi = {cid:CANDIDATE_ID, aid:CONSTITUENCY_ID}
  // this.router.navigate(["profile", { queryParams: {id:idi}, skipLocationChange: true}]);
  }
}

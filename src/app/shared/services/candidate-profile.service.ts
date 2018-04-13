import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { CookieService } from './cookie.service';


@Injectable()
export class CandidateProfileService extends BaseService {

  constructor(
    private http: Http,
    private router: Router,
    private paramsService: CookieService
  ) {
    super();
  }

  getCanditateProfile(CANDIDATE_ID, CONSTITUENCY_ID) {

    return this.http.get(this._url + "/candidates/" + CANDIDATE_ID + "/?constituency_id=" + CONSTITUENCY_ID, this.get_options())
      .map(res => res.json());
  }

  navigateCandidate(CANDIDATE_ID, CONSTITUENCY_ID) {
    this.paramsService.createCookie("c_id", CANDIDATE_ID, null, null);
    this.paramsService.createCookie("con_id", CONSTITUENCY_ID, null, null);
    this.router.navigate(['/profile']);
  }

  getCandidatesCandidatures(CANDIDATE_ID, CONSTITUENCY_ID) {
    return this.http.get(this._url + "/candidates/" + CANDIDATE_ID + "/candidatures?constituency_id=" + CONSTITUENCY_ID, this.get_options())
      .map(res => res.json());
  }

  
}

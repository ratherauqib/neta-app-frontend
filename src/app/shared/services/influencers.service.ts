import { Http } from '@angular/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InfluencersService extends BaseService {

  
  constructor(private http:Http) { 
    super();
  }
  getAllInfluencers(){
    return this.http.get(this._url+'/influencers?constituency_id=44443cf7-51ad-422d-a9c6-11a322d5797a',this.get_options());
  }
}


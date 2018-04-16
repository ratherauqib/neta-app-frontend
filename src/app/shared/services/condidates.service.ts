import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CondidatesService extends BaseService {

  
  
   constructor(private http:HttpClient) { 
    super();
  }
  getAllCandidates(){
    return this.http.get(this._url+'/candidatures?constituency_id=44443cf7-51ad-422d-a9c6-11a322d5797a',this.httpOptions)
    .map(res => JSON.parse(JSON.stringify(res)));  
  }


}

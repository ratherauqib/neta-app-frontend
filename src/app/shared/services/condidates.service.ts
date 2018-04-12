import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';
@Injectable()
export class CondidatesService extends BaseService {

  
  
   constructor(private http:Http) { 
    super();
  }
  getAllCandidates(){
    return this.http.get(this._url+'/candidatures?constituency_id=44443cf7-51ad-422d-a9c6-11a322d5797a',this.get_options());
  }


}

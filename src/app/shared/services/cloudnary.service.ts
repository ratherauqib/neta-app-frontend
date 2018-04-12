import { Injectable } from '@angular/core';

@Injectable()
export class CloudnaryService {

  cloudnaryUrl = 'http://res.cloudinary.com/neta-dev/image/upload/';
  
  constructor() { }

}

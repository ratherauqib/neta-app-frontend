import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { CondidatesService } from './services/condidates.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidateProfileService } from './services';


import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'neta-dev' } as CloudinaryConfiguration)
  ],
  declarations: [NotFoundComponent],
  providers:[CondidatesService,CandidateProfileService],
  exports:[CommonModule]
})
export class SharedModule { }

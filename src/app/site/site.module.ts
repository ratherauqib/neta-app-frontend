import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routes } from './../config/routes';
import { HomeComponent } from './components/home/home.component';
import { InfluencersComponent } from './components/influencers/influencers.component';
import { IssuesComponent } from './components/issues/issues.component';
import { LeadersComponent } from './components/leaders/leaders.component';
import { SiteComponent } from './site.component';
import { AppHeaderComponent } from './toolbars/app-header/app-header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routes
  ],
  declarations: [
    SiteComponent,
    AppHeaderComponent,
    HomeComponent,
    IssuesComponent,
    LeadersComponent,
    InfluencersComponent
  ]
})
export class SiteModule { }

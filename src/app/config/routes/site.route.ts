import { LeadersComponent } from './../../site/components/leaders/leaders.component';
import { Routes } from '@angular/router';
import { SiteComponent } from '../../site/site.component';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
import { HomeComponent } from '../../site/components/home/home.component';
import { IssuesComponent } from '../../site/components/issues/issues.component';
import { InfluencersComponent } from '../../site/components/influencers/influencers.component';


export const SITE_ROUTES: Routes = [
	{
		path: '',
		component: SiteComponent,
		children:[
			{
				path:'',component:HomeComponent,pathMatch:'full'
			},
			{ 
				path: 'issues' ,component:IssuesComponent
			},
			{
				path: 'leaders',	component:LeadersComponent
			},
			{
				path: 'influencers',		component:InfluencersComponent
			},
			{
				path: '**',		component: NotFoundComponent,
			}
		]
	},
	
	
];


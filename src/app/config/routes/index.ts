import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SITE_ROUTES } from './site.route';


const routing: Routes = [
	
	...SITE_ROUTES
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routing);


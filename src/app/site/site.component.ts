import { Component } from '@angular/core';

@Component({
  selector: 'app-site',
  template: `
      <app-header></app-header>
  		<router-outlet></router-outlet>
    `,
})
export class SiteComponent {
 /* title = 'app';*/
}
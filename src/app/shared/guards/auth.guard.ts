import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import {CookieService} from './../services/cookie.service';

@Injectable()
export class AuthGuard implements CanActivate  {
    constructor(
        private router: Router,
		private _cookieService:CookieService
    ) {}

    canActivate(_activatedRouteSnapshot:ActivatedRouteSnapshot) {
        let cookie = JSON.parse(this._cookieService.readCookie('storage'));
		let user = _activatedRouteSnapshot.url[0].path;
        if (cookie && cookie.token != null) {
			if(cookie.role == user)
            return true;
        }
        this.router.navigate(['/login']);
        return false;
	}
}

import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {isNullOrUndefined} from 'util';

export const AUTH_SERVICE_TOKEN = new InjectionToken('AUTH_SERVICE');

export interface GenericAuthService {
  connectedUser: any;
}

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(@Optional() private router: Router,
              @Inject(AUTH_SERVICE_TOKEN) private auth: GenericAuthService,
              // private auth: AuthService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('activate app guard for ' + JSON.stringify(this.auth.connectedUser));
    return !isNullOrUndefined(this.auth.connectedUser);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

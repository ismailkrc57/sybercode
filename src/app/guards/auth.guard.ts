import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private route:Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-ignore
    return this.auth.login(localStorage.getItem('username'), localStorage.getItem('password')).pipe(map(res => {
      if (res.length > 0) {
        return true;
      }
      else {
        this.route.navigate(['/login']).then(r => console.log(r));
        return false;
      }
    }));
  }

}

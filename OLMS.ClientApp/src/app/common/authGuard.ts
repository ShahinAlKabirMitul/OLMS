import { UserService } from '../service/user.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthorized()) {
            return true;
        }

        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}
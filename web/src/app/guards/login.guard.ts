import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie';

import { environment } from "@environment";
import { AuthService } from "@services/auth.service";

/**
 * Check if the user is already connect. Redirect to areas list if already connected.
 */
@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _httpClient: HttpClient,
        private _cookieService: CookieService,
        private _authService: AuthService
    ) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this._cookieService.hasKey(environment.cookies.jwt.name))
            return new Promise<boolean | UrlTree>((resolve) => {
                this._httpClient.get('/')
                    .pipe(catchError(() => {
                        this._authService.logout();
                        return of(resolve(true));
                    }))
                    .subscribe(() => resolve(this._router.parseUrl('/areas')));

            });
        return true;
    }

}
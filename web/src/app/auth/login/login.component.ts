import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "@services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public form: FormGroup = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", Validators.required)
    });
    public isLoading = false;

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {}

    public get appsLoginButton(): ReadonlyArray<{ iconSvgPath: string, name: string, redirect: string }> {
        return this._authService.apps;
    }

    public submitForm(): void {
        if (this.form.invalid || this.form.pristine)
            return;

        this.isLoading = true;
        this._authService.login(this.form.get('email')?.value, this.form.get('password')?.value)
            .then(() => this._router.navigateByUrl('/areas', { replaceUrl: true }))
            .finally(() => this.isLoading = false);
    }

    public redirectToAppAuth(redirectRoute: string): void {
        this._authService.redirectToApp(redirectRoute);
    }

}
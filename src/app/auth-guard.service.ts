import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    // CanActivate is a special method that is required for AuthGuard...
    // It's so special, that Angular provides the inputs, we just have to define them.
    // When we try to navigate a route, Angular will run this method before navigating.
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

            // We are simulating Authertication here, so we wait for a Promise to resolve (isAuthenticated).
            // Once resolved, if not authenticated, navigate to home page.
            return this.authService.isAuthenticated().then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true
                    } else {
                        this.router.navigate( ['/'] )
                    }
                }
            )
    }

    canActivateChild(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state)
        }

    constructor(private authService : AuthService, private router : Router) {}
}
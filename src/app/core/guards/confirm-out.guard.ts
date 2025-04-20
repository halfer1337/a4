import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const confirmOutGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return confirm('выйти?');
}
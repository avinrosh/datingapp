import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr'
 
 
export const AuthGuard = () => {
    const accountService = inject(AccountService);
    const toastr = inject(ToastrService);
 
    return accountService.currentUser$.pipe(
        map((user) => {
            if (user) return true;
            else {
                toastr.error("You shall not pass!");
                return false;
            }
        })
    )
};
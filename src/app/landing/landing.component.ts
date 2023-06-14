import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faReceipt, faCarrot, faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'csc-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
    constructor(private _router: Router) {}

    navigateTo(route: string) {
        this._router.navigate([route]);
    }
    faReceipt = faReceipt;
    faCarrot = faCarrot;
    faListCheck = faListCheck;
}

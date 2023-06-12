import { Component } from '@angular/core';
import {
    faReceipt,
    faCarrot,
    faListCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'csc-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
    faReceipt = faReceipt;
    faCarrot = faCarrot;
    faListCheck = faListCheck;
}

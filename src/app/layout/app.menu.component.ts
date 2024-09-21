import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Store Management',
                items: [
                    { label: 'Orders', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'Products', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud'] },
                    { label: 'Customers', icon: 'pi pi-fw pi-id-card', routerLink: ['/mydashboard'] },
                    
                ]
            },
            {
                label: 'Web Management',
                items: [
                    { label: 'About Us', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Manage Home', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Contact Us', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Catogories', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Payments', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'My Account', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Message', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon' },
                    { label: 'Notifications', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Settings', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                   
                ]
            },
            {
                label: 'Exit',
                items: [
                    { label: 'Signout', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                ]
            },
        ];
    }
}

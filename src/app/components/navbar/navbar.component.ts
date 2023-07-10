import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuElements: any[] = [
    { name: 'Home', routerLink: '/', class: ''},
    { name: 'Books', routerLink: '', class: ''},
    { name: 'Services', routerLink: '', class: ''},
    { name: 'About Us', routerLink: '', class: ''},
    { name: 'Sugerencias', routerLink: '', class: ''},
  ]
}

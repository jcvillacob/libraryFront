import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuElements: any[] = [
    { name: 'Home', routerLink: 'home', class: ''},
    { name: 'Books', routerLink: '', class: ''},
    { name: 'Services', routerLink: '', class: ''},
    { name: 'About Us', routerLink: 'about-us', class: ''},
    { name: 'Login', routerLink: '', class: '-login'},
  ]
  titleB: boolean = false;
  currentRoute: string = '';

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
      if(this.currentRoute == '/home') {
        this.titleB = false;
      } else {
        this.titleB = true;
      }
    });

    this.renderer.listen('window', 'scroll', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const windowHeight = window.innerHeight - 100;

      if(this.currentRoute == '/home') {
        if (scrollPosition >= windowHeight ) {
          this.titleB = true;
        } else {
          this.titleB = false;
        }
      } else {
        this.titleB = true;
      }
      
    });
  }
}

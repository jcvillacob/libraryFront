import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redes: any[] = [
    {class: 'fa-brands fa-facebook', name: 'Facebook'},
    {class: 'fa-brands fa-twitter', name: 'Twitter'},
    {class: 'fa-brands fa-instagram', name: 'Instagram'},
    {class: 'fa-brands fa-linkedin', name: 'LinkedIn'},
    {class: 'fa-brands fa-github', name: 'Github'}
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  distance: number = 0;
  count: number = 0;
  activities: any[] = [
    {activity: 'Clubes de lectura', description: '', image: '', routerLink: ''},
    {activity: 'Talleres de escritura', description: '', image: '', routerLink: ''},
    {activity: 'Cuentacuentos para niños', description: '', image: '', routerLink: ''},
    {activity: 'Conferencias y charlas', description: '', image: '', routerLink: ''},
    {activity: 'Exposiciones', description: '', image: '', routerLink: ''},
    {activity: 'Proyecciones de películas', description: '', image: '', routerLink: ''},
    {activity: 'Eventos especiales', description: '', image: '', routerLink: ''}
  ];

  corousel(direction: string) {
    const numb = this.activities.length;
    if(direction === 'right' && this.count < (numb - 3) ) {
      this.count += 1;
      this.distance-= 430;
    }else if(direction === 'left'  && this.distance != 0) {
      this.count -= 1;
      this.distance+= 430;
    }
  }

}

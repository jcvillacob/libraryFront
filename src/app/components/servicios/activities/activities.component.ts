import { CdkDragEnd, CdkDragRelease, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  carouselEnabled: boolean = false;
  distance: number = 0;
  count: number = 0;
  activities: any[] = [
    { activity: 'Clubes de lectura', image: '../../../../assets/servicios/lectura.png', routerLink: '', 
            description: 'Acompañanos a leer en grupo los mejores libros' },
    { activity: 'Talleres de escritura', description: '', image: '../../../../assets/servicios/escritura.png', routerLink: '' },
    { activity: 'Cuentacuentos para niños', description: '', image: '../../../../assets/servicios/clubs.png', routerLink: '' },
    { activity: 'Conferencias y charlas', description: '', image: '../../../../assets/servicios/escritura.png', routerLink: '' },
    { activity: 'Exposiciones', description: '', image: '../../../../assets/servicios/clubs.png', routerLink: '' },
    { activity: 'Proyecciones de películas', description: '', image: '../../../../assets/servicios/escritura.png', routerLink: '' },
    { activity: 'Eventos especiales', description: '', image: '../../../../assets/servicios/clubs.png', routerLink: '' }
  ];

  startPosition: number = 0;

  dragStart(event: CdkDragStart) {
    this.startPosition = 0;
  }

  dragEnd(event: CdkDragEnd) {
    const movementX = event.distance.x;
    const direction = movementX < this.startPosition ? 'right' : 'left';
    console.log(movementX, this.startPosition);
    this.corousel(direction);
  }

  corousel(direction: string) {
    const numb = this.activities.length;
    if (direction === 'right' && this.count < (numb - 3)) {
      this.count += 1;
      this.distance -= 430;
    } else if (direction === 'left' && this.distance != 0) {
      this.count -= 1;
      this.distance += 430;
    }
  }

}

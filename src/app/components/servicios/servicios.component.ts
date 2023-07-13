import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements AfterViewInit {
  newImg: boolean = false;
  selected: number = 0;
  itemSelected: any = {};
  items: any[] = [
    {category: 'Nuevos Libros', title: '', description: '', img: '../../../assets/servicios/libros.png'},
    {category: 'Deportes', title: '', description: '', img: '../../../assets/servicios/sports.png'},
    {category: 'Talleres', title: '', description: '', img: '../../../assets/servicios/club.png'},
    {category: 'Eventos Especiales', title: '', description: '', img: '../../../assets/servicios/events.png'},
  ];  
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.itemSelected = this.items[0];
      this.newImg = true;
    }, 100);
  }

  selectI(i: number) {
    this.selected = i;
    this.itemSelected = this.items[i];
    this.newImg = false;
    setTimeout(() => {
      this.newImg = true;
    }, 300);
  }

}

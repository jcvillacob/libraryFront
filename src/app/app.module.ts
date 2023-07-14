import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SomeBooksComponent } from './components/home/some-books/some-books.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ActivitiesComponent } from './components/servicios/activities/activities.component';
import { BooksComponent } from './components/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SomeBooksComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    ServiciosComponent,
    ActivitiesComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

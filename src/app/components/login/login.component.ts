import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  register: boolean = false;

  changeRegister(): void {
    this.register = !this.register;
  }

  onSubmit() {
    
  }

}

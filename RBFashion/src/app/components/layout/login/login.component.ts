import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  onLogin() {
    const loginData = {
      userName: this.email,
      password: this.password
    };

    this.loginService.createUser(loginData).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Handle successful login (e.g., navigate to another page or store token)
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error (e.g., show error message)
      }
    );
  }
}

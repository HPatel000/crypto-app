import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData!: { email: string; password: string };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.loadUser().then(() => {
      if (this.userService.isAuthenticated && !this.userService.loading) {
        this.router.navigate(['/mycoins']);
      }
    });
  }

  loginUser(email: string, password: string) {
    this.userService.login({ email, password });
  }
}

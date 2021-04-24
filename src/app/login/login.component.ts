import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData!: { email: string; password: string };
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  loginUser(email: string, password: string) {
    this.userService.login({ email, password });
  }
}

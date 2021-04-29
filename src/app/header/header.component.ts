import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username: string;
  isAuthenticated: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.loadUser().then(() => {
      console.log(this.userService.isAuthenticated);
      this.isAuthenticated = true;
      this.username = this.userService.user.name;
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}

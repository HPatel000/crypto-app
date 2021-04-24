import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input()
  newUser!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  createUser(name: string, email: string, password: string) {
    this.userService.register({ name, email, password });
    console.log(name, email, password);
  }
}

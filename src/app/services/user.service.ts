import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User;
  data!: Observable<any>;
  token: String;

  constructor() {}

  getToken() {}

  async loadUser() {
    if (localStorage.authToken) {
      console.log('1*******************');
      this.setAuthToken(localStorage.authToken);
    }
    try {
      const res = await axios.get('http://localhost:5000/api/auth/');
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  setAuthToken(token) {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
    }
  }

  async register(user: User) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(user);

    try {
      const res = await axios.post(
        'http://localhost:5000/api/users/',
        user,
        config
      );
      console.log(res.data);
      this.loadUser();
    } catch (err) {
      console.log(err);
    }
  }

  async login({ email, password }) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/',
        { email, password },
        config
      );
      console.log(res.data);
      this.loadUser();
    } catch (err) {
      console.log(err);
    }
  }

  logout() {
    localStorage.removeItem('authToken');
  }
}

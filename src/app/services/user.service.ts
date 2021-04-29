import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any;
  usercoins: [];
  data!: Observable<any>;
  token!: String;
  isAuthenticated: boolean = false;
  loading: boolean = true;

  constructor(private router: Router) {}

  getToken() {}

  async loadUser() {
    if (localStorage.authToken) {
      console.log(
        '🚀 ~ file: user.service.ts ~ line 21 ~ UserService ~ loadUser ~ localStorage.authToken',
        localStorage.authToken
      );
      this.setAuthToken(localStorage.authToken);
    }
    try {
      const res = await axios.get('http://localhost:5000/api/auth/');
      console.log(
        '🚀 ~ file: user.service.ts ~ line 29 ~ UserService ~ loadUser ~ res',
        res.data
      );
      this.user = res.data;
      this.usercoins = this.user.coins;
      this.isAuthenticated = true;
      this.loading = false;
      console.log(
        '🚀 ~ file: user.service.ts ~ line 37 ~ UserService ~ loadUser ~ this.loading',
        this.loading
      );
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
      localStorage.setItem('authToken', res.data.token);
      this.loadUser();
      this.router.navigate(['/home']);
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
      console.log(
        '🚀 ~ file: user.service.ts ~ line 78 ~ UserService ~ login ~ res',
        res.data.token
      );
      localStorage.setItem('authToken', res.data.token);
      this.loadUser();
      this.router.navigate(['/home']);
    } catch (err) {
      console.log(err);
    }
  }

  async addCoin(coin) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        coin: coin,
      },
    };
    try {
      const res = await axios.put(
        `http://localhost:5000/api/users/addcoin/${this.user._id}`,
        config
      );
      console.log(
        '🚀 ~ file: user.service.ts ~ line 78 ~ UserService ~ login ~ res',
        res.data
      );
      this.loadUser();
    } catch (err) {
      console.log(err);
    }
  }

  async removeCoin(coin) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        coin: coin,
      },
    };
    try {
      const res = await axios.put(
        `http://localhost:5000/api/users/removecoin/${this.user._id}`,
        config
      );
      console.log(
        '🚀 ~ file: user.service.ts ~ line 78 ~ UserService ~ login ~ res',
        res.data
      );
      this.loadUser();
    } catch (err) {
      console.log(err);
    }
  }

  logout() {
    localStorage.removeItem('authToken');
  }
}

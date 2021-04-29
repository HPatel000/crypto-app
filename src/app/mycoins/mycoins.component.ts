import { Component, OnInit } from '@angular/core';

import { RateService } from '../rates.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-mycoins',
  templateUrl: './mycoins.component.html',
  styleUrls: ['./mycoins.component.css'],
})
export class MycoinsComponent implements OnInit {
  CoinNames = [
    'Bitcoin',
    'Litecoin',
    'Namecoin',
    'Peercoin',
    'Dogecoin',
    'Gridcoin',
    'Primecoin',
    'Ripple',
    'Nxt',
    'Auroracoin',
    'Dash',
    'NEO',
    'Mazacoin',
    'Monero',
    'Titcoin',
    'Stellar',
    'Vertcoin',
    'Ethereum',
    'Nano',
    'Tether',
    'Zcash',
    'Cardano',
  ];
  userCoins = [];
  userCoinsData = [];
  v = [];
  constructor(private userservice: UserService, private rs: RateService) {}
  ngOnInit() {
    this.userCoins = this.userservice.user.coins;
    function TitleCase(title: string) {
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
    this.userservice.user.coins.forEach((coin) => {
      console.log(coin);

      this.rs.getValue(TitleCase(coin)).subscribe((data: any[]) => {
        console.log(data);
        console.log(data['name']);
        this.userCoinsData.push(data);
      });
    });
    console.log(this.userCoinsData);
  }

  getcoinsData() {}

  onCoinAdd(coin) {
    this.userservice.addCoin(coin);
    console.log(coin);
  }

  onCoinRemove(coin) {
    this.userservice.removeCoin(coin);
    console.log(coin);
  }
}

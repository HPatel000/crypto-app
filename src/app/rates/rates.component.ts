import { Component, OnInit } from '@angular/core';
import { RateService } from '../rates.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
})
export class RatesComponent implements OnInit {
  li: any;
  gainers = [];
  losers = [];
  lis = [];
  v = [];

  constructor(private rs: RateService) {}

  ngOnInit() {
    this.rs.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);

      console.log(data['gainers']);
      this.gainers = data['gainers'];
      this.losers = data['losers'];
    });
  }
  onClickSubmit(a) {
    console.log(a.coins);
    function TitleCase(title: string) {
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
    document.getElementById('c').style.display = 'inline';
    this.rs.getValue(TitleCase(a.coins)).subscribe((data: any[]) => {
      console.log(data);
      console.log(data['name']);
      this.v = data;
    });
  }
}

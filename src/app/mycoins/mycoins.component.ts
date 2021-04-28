import { Component, OnInit } from '@angular/core';

import { RateService } from '../rates.service';
@Component({
  selector: 'app-mycoins',
  templateUrl: './mycoins.component.html',
  styleUrls: ['./mycoins.component.css']
})
export class MycoinsComponent implements OnInit {
  li:any;
  l1={"gainers":[{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"THEKEY","percentChange24hUsd":"51.26602816950249194","priceBtc":"5.93e-8","priceUsd":"0.0032526850549973","symbol":"TKY"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"CoinFi","percentChange24hUsd":"49.87030292945575843","priceBtc":"1.6445e-7","priceUsd":"0.0090203045074925","symbol":"COFI"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"The Forbidden Forest","percentChange24hUsd":"37.23421356258399027","priceBtc":"4.5925e-7","priceUsd":"0.0251904824874791","symbol":"FORESTPLUS"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Dent","percentChange24hUsd":"27.80384666991555543","priceBtc":"2.1295e-7","priceUsd":"0.0116805949824903","symbol":"DENT"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Klever","percentChange24hUsd":"27.74774634913850302","priceBtc":"0.0000016185","priceUsd":"0.0887769099749262","symbol":"KLV"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"TurtleCoin","percentChange24hUsd":"27.15552210596576988","priceBtc":"9.65e-9","priceUsd":"0.0005293155274996","symbol":"TRTL"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Alphacat","percentChange24hUsd":"26.65803301662235123","priceBtc":"2.4e-8","priceUsd":"0.0013164323999989","symbol":"ACAT"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Dego Finance","percentChange24hUsd":"26.57593665925960903","priceBtc":"0.0002436567194793","priceUsd":"13.3649","symbol":"DEGO"}],"losers":[{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"CargoX","percentChange24hUsd":"-9.273133553135558296","priceBtc":"0.00000414","priceUsd":"0.2270845889998113","symbol":"CXO"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"WOM Protocol","percentChange24hUsd":"-9.285455070313237117","priceBtc":"0.0000044660888018","priceUsd":"0.244971","symbol":"WOM"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Xensor","percentChange24hUsd":"-9.337442289846978025","priceBtc":"5.36358722e-8","priceUsd":"0.002942","symbol":"XSR"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Sentivate","percentChange24hUsd":"-9.755122739196077647","priceBtc":"3.133e-7","priceUsd":"0.0171849279549857","symbol":"SNTVT"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Alchemy","percentChange24hUsd":"-11.41223724105613153","priceBtc":"0.0000179416732679","priceUsd":"0.984125","symbol":"ACOIN"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Eden","percentChange24hUsd":"-11.674690611665018083","priceBtc":"1.3735e-7","priceUsd":"0.0075338329224937","symbol":"EDN"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"MarcoPolo Protocol","percentChange24hUsd":"-12.274615528782451587","priceBtc":"0.00000201","priceUsd":"0.1102512134999084","symbol":"MAP"},{"lastUpdated":"2021-04-27T16:29:40.000Z","name":"Cashaa","percentChange24hUsd":"-16.542355560441920021","priceBtc":"7.665e-7","priceUsd":"0.0420435597749651","symbol":"CAS"}]}
  p=[]
  lis=[];
  v=[]
  constructor(private rs : RateService){

   }
    ngOnInit(){

        this.rs.sendGetRequest().subscribe((data: any[])=>{
          console.log(data['gainers'])
          this.p=data['gainers'];
        })
  
    }
    onClickSubmit(a){
      console.log(a.coins)
      document.getElementById('c').style.display='inline';
      this.rs.getValue(a.coins).subscribe((data: any[])=>{
        console.log(data)
        console.log(data['name'])
        this.v=data;
      })
    }
  }
    

import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  api="https://cryptantapi.root.sx/topGainersLosers";

  constructor(private httpClient : HttpClient) {

   }
   public sendGetRequest(){
    return this.httpClient.get(this.api)
   }
   public getValue(name){
     var api="https://cryptantapi.root.sx/getPrice/"+ name
     return this.httpClient.get(api)
   }
}

import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api="https://cryptantapi.root.sx/news";

  constructor(private httpClient : HttpClient) {

   }
   public sendGetRequest(){
    return this.httpClient.get(this.api)
   }
   getImage(a){
     console.log("h")
      return this.httpClient.get(a,{ responseType: 'blob'})

     
   }
}

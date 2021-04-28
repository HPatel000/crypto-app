import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
/*export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
export class NewsletterComponent implements OnInit {
  p=[]
  constructor(private dataService : DataService){

   }
    ngOnInit() {
      this.dataService.sendGetRequest().subscribe((data: any[])=>{
        console.log(data)
        this.p=data;
      })

  }
}
  
 
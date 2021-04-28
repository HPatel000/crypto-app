import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
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
  constructor(private dataService : DataService, private router:Router){

   }
    ngOnInit() {
      this.dataService.sendGetRequest().subscribe((data: any[])=>{
        console.log(data)
        this.p=data;
        this.p['urlToImage']=this.loadImage(data['urlToImage'])
      })

  }
  loadImage=function(a){
    this.p['urlToImage']=this.dataService.getImage(a)


  }
  onClickSubmit(a){
    localStorage.setItem("a",a['content'])
    
    localStorage.setItem("d",a['url'])
    
    localStorage.setItem("b",a['title'])
    localStorage.setItem("c",a['urlToImage'])
    console.log(a)
    console.log(localStorage.getItem("a"))
    this.router.navigate(['./fullnews'])

  }
}
  
 
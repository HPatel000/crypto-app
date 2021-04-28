import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-fullnews',
  templateUrl: './fullnews.component.html',
  styleUrls: ['./fullnews.component.css']
})
export class FullnewsComponent implements OnInit {
  a=localStorage.getItem("a")
  b=localStorage.getItem("b")
  c=localStorage.getItem("c")
  d=localStorage.getItem("d")
  p:any
  q:any
  r:any
  s:any

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.p=this.a
    this.q=this.b
    this.r=this.c
    this.s=this.d
    console.log(this.p,this.q, this.r, this.s)
    
    
    this.r =this.loadImage(this.c)
  }

  loadImage=function(a){
  this.r=this.dataService.getImage(a)
  console.log(this.r)
  console.log("here")

}


}
  
 
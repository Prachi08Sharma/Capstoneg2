import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-decor',
  templateUrl: './decor.component.html',
  styleUrls: ['./decor.component.css']
})
export class DecorComponent implements OnInit {
  public productList : any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
    })
  }
addtoCart(item: any){

}
}
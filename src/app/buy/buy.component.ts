import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {
  public products : any=[];
  public grandTotal !: number;
 
 constructor(private CartService: CartService){}
 
 ngOnInit(): void{
    this.CartService.getProduct().subscribe(res=>{
     this.products =res;
     this.grandTotal 
    })
 }
}

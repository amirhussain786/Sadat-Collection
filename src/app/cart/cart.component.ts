import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

public products : any[]=[];
 public grandTotal !: number;

constructor(private CartService: CartService){}

ngOnInit(): void{
   this.CartService.getProduct().subscribe(res=>{
    this.products =res;
    this.grandTotal 
   })
}

removeItem(item: any){
  this.CartService.removeCartItem(item)

}
emptyCart(){
  this.CartService.removeAllCart();
}
cartClicked() {
}
}

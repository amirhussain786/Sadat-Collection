import { CartService } from './../cart.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public cart : any[]=[]
public totalItem: number =0;

constructor (private CartService : CartService) {}

ngOnInit(): void{
  this.CartService.getProduct().subscribe(res=>{
    this.totalItem = res.length
  })
}
cartClicked(){

}
}

import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: any;
  public cards: any[] = [
    {
      price: 8500,
      img: 'https://manyavar.scene7.com/is/image/manyavar/Day%20411408_10-11-2022-05-40:283x395',
      des: 'Cream Floral Self Patterned Sherwani',
      size:'M'
    },
    {
      price: 11999,
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_3O9A1137_18-01-2016-02-31:283x395',
      des: 'Gorgeous Grey Sherwani',
      size:'L'

    },
    {
      price: 5000,
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_Wedding_16-11-2021-06-46:283x395',
      des: 'Subtle Pink Wedding Sherwani',
      size:'M'

    },
    {
      price: 6500,
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_SRP-219%20copy%20copy_15-11-2021-17-18:283x395',
      des: 'Graceful Gajaree Sherwani Set',
      size:'S'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_0R5A3982%20copy_16-09-2021-18-36:283x395',
      des: 'Maroon Embroidered Groom Sherwani',
      size:'M'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I02_SRP-277%20copy%20copy_15-11-2021-19-18:283x395',
      des: 'Enchanting Blue Sherwani Suit',
      size:'L'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I02_Manyavar%20Still00756_17-08-2022-04-15:283x395',
      des: 'Moss Green Self Design Sherwani',
      size:'M'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/Manyavar2288_05-12-2022-07-33:283x395',
      des: 'Light Pink Self Design Sherwani',
      size:'S'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_SRP-198%20copy%20copy_15-11-2021-17-34:283x395',
      des: 'Exquisite Pastel Pink Sherwani',
      size:'M'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I04_Manyavar%20Still00100_17-08-2022-00-21:283x395',
      des: 'Pearl White Self Embroidered Sherwani With Dupatta',
      size:'L'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I04_SRP-192%20copy%20copy_15-11-2021-17-45:283x395',
      des: 'Regal Fawn Sherwani Set',
      size:'M'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/CPSH200-304_3_16-02-2022-13-08:283x395',
      des: 'Fawn Embroidered Sherwani',
      size:'S'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_3O9A1016_18-01-2016-01-49:283x395',
      des: 'Sophisticated Black Sherwani Set',
      size:'M'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I04_3O9A1196_18-01-2016-02-50:283x395',
      des: 'Maroon Velvet Embroidered Sherwani',
      size:'L'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_IMGL7964_16-02-2022-14-20:283x395',
      des: 'Plush Biscuit Shade Sherwani',
      size:'M'
      

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_IMGL8023_16-02-2022-14-31:283x395',
      des: 'Quintessential Gajaree Sherwani',
      size:'S'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_IMGL1954%20copy%20copy_06-04-2022-19-51:283x395',
      des: 'Classy Fawn Sherwani',
      size:'M'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I04_IMGL7895_16-02-2022-14-03:283x395',
      des: 'Regal Velvet Maroon Sherwani Set',
      size:'L'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I04_IMGL1934%20copy%20copy_06-04-2022-19-07:283x395',
      des: 'Enigmatic Maroon Sherwani With Dupatta',
      size:'M'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/ODES1006D_340-OFF%20WHITE.12770_27-08-2023-18-53:283x395',
      des: 'Cream Aari Embroidered Sherwani Set',
      size:'M'

    },
    {
      price: '12999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_IMGL7827_16-02-2022-13-43:283x395',
      des: 'Self Design Off White Sherwani With Dupatta',
      size:'S'

    },
    {
      price: '13999',
      img: 'https://manyavar.scene7.com/is/image/manyavar/I03_Manyavar%20Still00427_17-08-2022-03-07:283x395',
      des: 'Light Cream Self Design Sherwani',
      size:'L'

    },
  ];
  constructor( private router: Router,
    private CartService: CartService
    ) {}

  ngOnInit(): void {
    this.productList.array.forEach((a:any) => {
    Object.assign(a,{quantity:1,total:a.price}); 
      
    });
  }

  addToCart(item: any) {
    this.CartService.addToCart(item)
    }
  
  // goToCart(item: any){
 // this.router.navigate(['cart'])

  //   this.cards.push(item)
  //   localStorage.setItem('cards',JSON.stringify(this.cards));

  // }
 
} 


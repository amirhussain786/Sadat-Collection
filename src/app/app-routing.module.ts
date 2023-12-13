import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

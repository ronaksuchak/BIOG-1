import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntelComponent } from './components/customize/intel/intel.component';
import { HomeComponent } from './container/home/home.component';
import { PcComponentsComponent } from './components/pc-components/pc-components.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddressComponent } from './components/address/address.component';
import { SigninComponent } from './components/signin/signin.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/authguard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cutomize_intel', component: IntelComponent },
  { path: 'addcomponent', component: PcComponentsComponent },
  { path: 'browse-components/:comp', component: ProductListComponent },
  { path: 'addtocart', component: CartComponent ,
    canActivate:[AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'shipping', component: AddressComponent
  ,
  canActivate:[AuthGuard] },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

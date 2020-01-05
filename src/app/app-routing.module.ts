import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'welcomepage', loadChildren: './welcomepage/welcomepage.module#WelcomepagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'accountpage', loadChildren: './accountpage/accountpage.module#AccountpagePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'cakes', loadChildren: './cakes/cakes.module#CakesPageModule' },
  { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'existingcustomers', loadChildren: './existingcustomers/existingcustomers.module#ExistingcustomersPageModule' },
  { path: 'cupcakes', loadChildren: './cupcakes/cupcakes.module#CupcakesPageModule' },
  { path: 'orderdetails', loadChildren: './orderdetails/orderdetails.module#OrderdetailsPageModule' },
  { path: 'brownies', loadChildren: './brownies/brownies.module#BrowniesPageModule' },
  { path: 'dessertjar', loadChildren: './dessertjar/dessertjar.module#DessertjarPageModule' },
  { path: 'cookies', loadChildren: './cookies/cookies.module#CookiesPageModule' },
  { path: 'macarons', loadChildren: './macarons/macarons.module#MacaronsPageModule' },
  { path: 'standardaccountinfo', loadChildren: './standardaccountinfo/standardaccountinfo.module#StandardaccountinfoPageModule' },
  { path: 'premiumaccountinfo', loadChildren: './premiumaccountinfo/premiumaccountinfo.module#PremiumaccountinfoPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

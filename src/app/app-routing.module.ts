import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'welcomepage', loadChildren: './Pages/welcomepage/welcomepage.module#WelcomepagePageModule' },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'accountpage', loadChildren: './Pages/accountpage/accountpage.module#AccountpagePageModule' },
  { path: 'signup', loadChildren: './Pages/signup/signup.module#SignupPageModule' },
  { path: 'addcustomer', loadChildren: './Pages/addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'existingcustomers', loadChildren: './Pages/existingcustomers/existingcustomers.module#ExistingcustomersPageModule' },
  { path: 'orderdetails', loadChildren: './Pages/orderdetails/orderdetails.module#OrderdetailsPageModule' },
  { path: 'standardaccountinfo', loadChildren: './Modals/standardaccountinfo/standardaccountinfo.module#StandardaccountinfoPageModule' },
  { path: 'premiumaccountinfo', loadChildren: './Modals/premiumaccountinfo/premiumaccountinfo.module#PremiumaccountinfoPageModule' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}

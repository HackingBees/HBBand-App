import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//custom imports
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  //{ path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate:[AuthGuard] },
  { path: '', loadChildren: './pages/home/home.module#HomePageModule', canActivate:[AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },  { path: 'band-create', loadChildren: './pages/band/band-create/band-create.module#BandCreatePageModule' },

 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

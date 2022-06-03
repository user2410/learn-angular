import { LoginComponent } from './pages/login/login.component';
import { DetailBookComponent } from './pages/detail-book/detail-book.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '' , component: HomeScreenComponent},
  { path: 'book/detail', component: DetailBookComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

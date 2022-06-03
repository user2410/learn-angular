import { LoginComponent } from './pages/login/login.component';
import { DetailBookComponent } from './pages/detail-book/detail-book.component';
import { DrawerModule } from './components/drawer/drawer.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    DetailBookComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

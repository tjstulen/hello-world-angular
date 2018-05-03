import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ChildAppComponent } from './child-app/child-app.component';
import { AdsComponent } from './ads/ads.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MaxService } from './max.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAppComponent,
    AdsComponent,
    WelcomeComponent,
    AboutComponent,
    UserListComponent,
    HomeComponent,
    MenuComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, RouterModule
  ],
  providers: [MaxService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

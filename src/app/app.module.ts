import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Page400Component } from './common/page400/page400.component';
import { Page500Component } from './common/page500/page500.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordPatternDirective } from './common/directives/password-pattern.directive';
import { NgForExampleComponent } from './Structural-directives/ng-for-example/ng-for-example.component';
import { NgIfExampleComponent } from './Structural-directives/ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './Structural-directives/ng-switch-example/ng-switch-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    Page400Component,
    Page500Component,
    LoginComponent,
    RegisterComponent,
    PasswordPatternDirective,
    NgForExampleComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
